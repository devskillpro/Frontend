'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ForgotSchema = Yup.object().shape({
  identifier: Yup.string()
    .required('Email or mobile is required')
    .test('email-or-mobile', 'Enter a valid email or mobile number', value =>
      !!value &&
      (/^\d{10}$/.test(value) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
    ),
});

const ForgotPasswordPage = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6e7d7] to-[#fff] py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Forgot Password?</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your email or mobile number and we'll send you a reset link.
        </p>
        <Formik
          initialValues={{ identifier: '' }}
          validationSchema={ForgotSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setMessage('');
            // Add your forgot password logic here
            setTimeout(() => {
              setMessage('If this account exists, a reset link has been sent.');
              setSubmitting(false);
              resetForm();
            }, 1200);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-8 space-y-6">
              <div className="space-y-3">
                <Field
                  name="identifier"
                  type="text"
                  placeholder="Email or Mobile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] text-gray-900"
                />
                <ErrorMessage name="identifier" component="div" className="text-red-500 text-sm" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-[#D4AF37] hover:bg-[#b89c2b] text-white font-bold rounded-md transition"
              >
                {isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </button>
              {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
            </Form>
          )}
        </Formik>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-[#D4AF37] hover:underline text-sm">Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
