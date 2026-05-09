"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 h-12 shadow-soft text-sm font-medium disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 size-4 animate-spin" />
          Sending...
        </>
      ) : (
        <>
          Send Message <ArrowUpRight className="ml-1 size-4" />
        </>
      )}
    </Button>
  );
}

export default function ContactForm() {
  const [state, action] = useActionState(submitContact, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-[2rem] glass p-8 md:p-10 shadow-card flex flex-col items-center justify-center text-center min-h-[480px]">
        <div className="size-16 rounded-full bg-emerald-500/15 flex items-center justify-center mb-6">
          <CheckCircle2 className="size-8 text-emerald-600" />
        </div>
        <h2 className="font-serif text-3xl mb-3">Message sent.</h2>
        <p className="text-muted-foreground leading-relaxed max-w-sm">
          Thanks for reaching out. We will get back to you at <span className="font-medium text-foreground">{""}</span> within a few hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2rem] glass p-8 md:p-10 shadow-card">
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">// Send a Message</p>
      <h2 className="font-serif text-3xl md:text-4xl mb-2">Tell us about your goals.</h2>
      <p className="text-sm text-muted-foreground mb-8">
        Fill in the form and our team will get back to you with the right next step.
      </p>

      {state.status === "error" && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 mb-6">
          <AlertCircle className="size-4 text-red-600 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{state.message}</p>
        </div>
      )}

      <form action={action} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">Full Name</Label>
            <Input id="fullName" name="fullName" placeholder="Your full name" className="h-11 rounded-xl" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-sm font-medium">Company</Label>
            <Input id="companyName" name="companyName" placeholder="Your company name" className="h-11 rounded-xl" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@company.com" className="h-11 rounded-xl" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium">I am a</Label>
            <select
              id="role"
              name="role"
              defaultValue=""
              className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="" disabled>Select your role</option>
              <option value="Advertiser / Affiliate">Advertiser / Affiliate</option>
              <option value="Agency">Agency</option>
              <option value="Publisher">Publisher</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-sm font-medium">Monthly Budget</Label>
            <select
              id="budget"
              name="budget"
              defaultValue=""
              className="flex h-11 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="" disabled>Select budget range</option>
              <option value="Under $2,000">Under $2,000</option>
              <option value="$2,000 to $10,000">$2,000 to $10,000</option>
              <option value="$10,000 to $30,000">$10,000 to $30,000</option>
              <option value="$30,000+">$30,000+</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="formats" className="text-sm font-medium">Ad Formats of Interest</Label>
            <Input id="formats" name="formats" placeholder="e.g. Push, Native, Telegram" className="h-11 rounded-xl" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us about your campaign goals, target GEOs, verticals, and any questions you have."
            className="min-h-[140px] rounded-xl resize-none"
            required
          />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}
