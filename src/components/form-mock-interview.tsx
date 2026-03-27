import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";

import { Interview } from "@/types";

import { CustomBreadCrumb } from "./custom-bread-crumb";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { toast } from "sonner";
import { Headings } from "./headings";
import { Button } from "./ui/button";
import { Loader, Trash2 } from "lucide-react";
import { Separator } from "./ui/separator";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { chatSession } from "@/scripts";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";

interface FormMockInterviewProps {
  initialData: Interview | null;
}

const formSchema = z.object({
  position: z.string().min(1).max(100),
  description: z.string().min(10),
  experience: z.coerce.number().min(0),
  techStack: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterview = ({ initialData }: FormMockInterviewProps) => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {},
  });

  const { isValid, isSubmitting } = form.formState;
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { userId } = useAuth();

  const title = initialData
    ? initialData.position
    : "Create a new mock interview";

  const breadCrumpPage = initialData ? initialData?.position : "Create";
  const actions = initialData ? "Save Changes" : "Create";

  const toastMessage = initialData
    ? { title: "Updated..!", description: "Changes saved successfully..." }
    : { title: "Created..!", description: "New Mock Interview created..." };

  // ✅ FIXED CLEAN FUNCTION
  const cleanAiResponse = (responseText: string) => {
    try {
      console.log("RAW AI RESPONSE:", responseText);

      let cleanText = responseText.trim();

      // remove markdown
      cleanText = cleanText
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

      // try direct parse
      try {
        return JSON.parse(cleanText);
      } catch (e) {
        console.warn("Direct parse failed...");
      }

      // extract JSON array
      const start = cleanText.indexOf("[");
      const end = cleanText.lastIndexOf("]");

      if (start !== -1 && end !== -1) {
        const jsonString = cleanText.substring(start, end + 1);
        return JSON.parse(jsonString);
      }

      throw new Error("No valid JSON found");
    } catch (error) {
      console.error("AI PARSE ERROR:", error);

      // fallback (prevents crash)
      return [
        {
          question: "Error generating question",
          answer: "Please try again.",
        },
      ];
    }
  };

  // ✅ IMPROVED PROMPT
  const generateAiResponse = async (data: FormData) => {
    const prompt = `
Return ONLY a valid JSON array.
No explanation.
No markdown.
No extra text.

Format:
[
  { "question": "string", "answer": "string" }
]

Job Info:
Position: ${data.position}
Description: ${data.description}
Experience: ${data.experience}
Tech Stack: ${data.techStack}
`;

    const aiResult = await chatSession.sendMessage(prompt);

    const responseText = await aiResult.response.text();

    const cleanedResponse = cleanAiResponse(responseText);

    return cleanedResponse;
  };

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);

      const aiResult = await generateAiResponse(data);

      if (initialData) {
        await updateDoc(doc(db, "interviews", initialData?.id), {
          questions: aiResult,
          ...data,
          updatedAt: serverTimestamp(),
        });
      } else {
        await addDoc(collection(db, "interviews"), {
          ...data,
          userId,
          questions: aiResult,
          createdAt: serverTimestamp(),
        });
      }

      toast(toastMessage.title, { description: toastMessage.description });

      navigate("/generate", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Error..", {
        description: "Something went wrong. Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialData) {
      form.reset({
        position: initialData.position,
        description: initialData.description,
        experience: initialData.experience,
        techStack: initialData.techStack,
      });
    }
  }, [initialData, form]);

  return (
    <div className="w-full flex-col space-y-4">
      <CustomBreadCrumb
        breadCrumbPage={breadCrumpPage}
        breadCrumbItems={[{ label: "Mock Interviews", link: "/generate" }]}
      />

      <div className="mt-4 flex items-center justify-between w-full">
        <Headings title={title} isSubHeading />

        {initialData && (
          <Button size={"icon"} variant={"ghost"}>
            <Trash2 className="min-w-4 min-h-4 text-red-500" />
          </Button>
        )}
      </div>

      <Separator className="my-4" />

      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full p-8 rounded-lg flex-col flex gap-6 shadow-md"
        >
          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <FormLabel>Job Role</FormLabel>
                <FormControl>
                  <Input disabled={loading} {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea disabled={loading} {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <FormLabel>Experience</FormLabel>
                <FormControl>
                  <Input type="number" disabled={loading} {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="techStack"
            render={({ field }) => (
              <FormItem className="w-full space-y-4">
                <FormLabel>Tech Stack</FormLabel>
                <FormControl>
                  <Textarea disabled={loading} {...field} value={field.value || ""} />
                </FormControl>
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-4">
            <Button type="reset" variant="outline">Reset</Button>
            <Button type="submit" disabled={!isValid || loading}>
              {loading ? <Loader className="animate-spin" /> : actions}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};