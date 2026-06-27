import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/products";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(6, "Enter a valid phone").max(30),
  company: z.string().trim().min(2, "Enter your company").max(150),
  productInterest: z.string().min(1, "Select a category"),
  message: z.string().trim().min(10, "Tell us a bit more").max(1500),
});
type FormValues = z.infer<typeof schema>;

export function ContactForm({ defaultCategory }: { defaultCategory?: string }) {
  const [submitting, setSubmitting] = useState(false);
  const {
    register, handleSubmit, formState: { errors }, reset, setValue, watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { productInterest: defaultCategory ?? "" },
  });

  const onSubmit = async (_values: FormValues) => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast.success("Thank you, our sales team will respond within 24 hours.");
    reset({ productInterest: defaultCategory ?? "" });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" error={errors.name?.message}>
          <Input id="name" autoComplete="name" {...register("name")} />
        </Field>
        <Field id="company" label="Company" error={errors.company?.message}>
          <Input id="company" autoComplete="organization" {...register("company")} />
        </Field>
        <Field id="email" label="Work email" error={errors.email?.message}>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
        </Field>
        <Field id="phone" label="Phone" error={errors.phone?.message}>
          <Input id="phone" type="tel" autoComplete="tel" {...register("phone")} />
        </Field>
      </div>

      <Field id="productInterest" label="Product interest" error={errors.productInterest?.message}>
        <Select
          value={watch("productInterest")}
          onValueChange={(v) => setValue("productInterest", v, { shouldValidate: true })}
        >
          <SelectTrigger id="productInterest"><SelectValue placeholder="Select a category" /></SelectTrigger>
          <SelectContent>
            {categories.map((c) => (
              <SelectItem key={c.slug} value={c.name}>{c.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>

      <Field id="message" label="Message" error={errors.message?.message}>
        <Textarea id="message" rows={5} placeholder="Tell us about the products, grades, quantities and shipping destination."
          {...register("message")} />
      </Field>

      <Button type="submit" disabled={submitting} className="w-full bg-navy text-paper hover:bg-navy-deep sm:w-auto">
        {submitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending…</> : "Send enquiry"}
      </Button>
    </form>
  );
}

function Field({
  id, label, error, children,
}: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium text-navy">{label}</Label>
      <div className="mt-1.5">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}
