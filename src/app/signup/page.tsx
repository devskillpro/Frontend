'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FcGoogle } from 'react-icons/fc';

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  mobile: Yup.string()
    .matches(/^\d{10}$/, 'Mobile must be 10 digits')
    .required('Mobile is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
});

const SignupPage = () => {
  const [error, setError] = useState('');

  const handleGoogleSignup = () => {
    // Add your Google OAuth logic here
    alert('Google signup not implemented');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f6e7d7] to-[#fff] mt-12 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-[#D4AF37] hover:text-[#b89c2b]">
            Sign in
          </Link>
        </p>
        <Formik
          initialValues={{ name: '', email: '', mobile: '', password: '' }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setError('');
            // Add your signup logic here
            // Example: alert(JSON.stringify(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="mt-5 space-y-6">
              <div className="space-y-3">
                <Field
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] text-gray-900"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />

                <Field
                  name="email"
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] text-gray-900"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

                <Field
                  name="mobile"
                  type="text"
                  placeholder="Mobile Number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] text-gray-900"
                />
                <ErrorMessage name="mobile" component="div" className="text-red-500 text-sm" />

                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#D4AF37] focus:border-[#D4AF37] text-gray-900"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 bg-[#D4AF37] hover:bg-[#b89c2b] text-white font-bold rounded-md transition"
              >
                {isSubmitting ? 'Signing up...' : 'Sign Up'}
              </button>
            </Form>
          )}
        </Formik>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md bg-white hover:bg-gray-50 font-medium text-gray-700"
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignupPage;
