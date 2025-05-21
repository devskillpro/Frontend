import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";

const NewsletterSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required"),
});

const NewsletterSignup = () => (
  <div className="space-y-4 max-w-md">
    <h3 className="text-xl font-semibold text-white">Newsletter Signup</h3>
    <p className="text-gray-400">Subscribe to our newsletter</p>

    <Formik
      initialValues={{ email: "" }}
      validationSchema={NewsletterSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        // TODO: Add your newsletter subscription logic here
        alert(`Subscribed with: ${values.email}`);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="flex items-center w-full rounded-full overflow-hidden bg-white text-black">
            <Field
              type="email"
              name="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 outline-none text-sm"
            />
            <Button
              label={isSubmitting ? "Subscribing..." : "Subscribe"}
              variant="primary"
              className="rounded-none rounded-r-full"
              type="submit"
              disabled={isSubmitting}
            />
          </div>
          <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1 px-2" />
        </Form>
      )}
    </Formik>
  </div>
);

export default NewsletterSignup;
