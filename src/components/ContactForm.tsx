import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  service?: string;
  // Honeypot field (should remain empty)
  website?: string;
}

interface ContactFormProps {
  service?: string;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

/**
 * Contact Form Component
 * Includes honeypot field and Google reCAPTCHA v3 for spam protection
 */
export function ContactForm({ service, onSuccess, onError }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    defaultValues: {
      service: service || '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Check honeypot field
    if (data.website) {
      console.warn('Bot detected: honeypot field filled');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await executeRecaptcha();

      // Submit to Azure Function
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to send message');
      }

      // Success
      setSubmitStatus('success');
      reset();

      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');

      if (onError) {
        onError(error instanceof Error ? error : new Error('Unknown error'));
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Execute reCAPTCHA v3
   */
  const executeRecaptcha = async (): Promise<string> => {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined' || !(window as any).grecaptcha) {
        reject(new Error('reCAPTCHA not loaded'));
        return;
      }

      const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
        reject(new Error('reCAPTCHA site key not configured'));
        return;
      }

      (window as any).grecaptcha.ready(() => {
        (window as any).grecaptcha
          .execute(siteKey, { action: 'contact_form' })
          .then((token: string) => {
            resolve(token);
          })
          .catch((error: Error) => {
            reject(error);
          });
      });
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          Name <span style={{ color: 'var(--primary-azure)' }}>*</span>
        </label>
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' },
          })}
          type="text"
          id="name"
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
          style={{
            background: 'var(--surface-elevated)',
            borderColor: errors.name ? 'var(--error)' : 'var(--border)',
            color: 'var(--text-primary)',
          }}
          aria-invalid={errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm" style={{ color: 'var(--error)' }}>
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          Email <span style={{ color: 'var(--primary-azure)' }}>*</span>
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          id="email"
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
          style={{
            background: 'var(--surface-elevated)',
            borderColor: errors.email ? 'var(--error)' : 'var(--border)',
            color: 'var(--text-primary)',
          }}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm" style={{ color: 'var(--error)' }}>
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company Field */}
      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          Company <span style={{ color: 'var(--primary-azure)' }}>*</span>
        </label>
        <input
          {...register('company', {
            required: 'Company is required',
          })}
          type="text"
          id="company"
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
          style={{
            background: 'var(--surface-elevated)',
            borderColor: errors.company ? 'var(--error)' : 'var(--border)',
            color: 'var(--text-primary)',
          }}
          aria-invalid={errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
        />
        {errors.company && (
          <p id="company-error" className="mt-1 text-sm" style={{ color: 'var(--error)' }}>
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Phone Field (Optional) */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          Phone <span className="text-xs">(Optional)</span>
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
          style={{
            background: 'var(--surface-elevated)',
            borderColor: 'var(--border)',
            color: 'var(--text-primary)',
          }}
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: 'var(--text-secondary)' }}
        >
          Message <span style={{ color: 'var(--primary-azure)' }}>*</span>
        </label>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
          id="message"
          rows={5}
          className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-y"
          style={{
            background: 'var(--surface-elevated)',
            borderColor: errors.message ? 'var(--error)' : 'var(--border)',
            color: 'var(--text-primary)',
          }}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm" style={{ color: 'var(--error)' }}>
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot Field (hidden from users) */}
      <input
        {...register('website')}
        type="text"
        id="website"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        style={{
          position: 'absolute',
          left: '-9999px',
          width: '1px',
          height: '1px',
        }}
        aria-hidden="true"
      />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{
          background: isSubmitting ? 'var(--text-tertiary)' : 'var(--primary-azure)',
          color: 'var(--text-primary)',
        }}
        data-testid="submit-button"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div
          className="p-4 rounded-lg"
          style={{ background: 'var(--success-bg)', color: 'var(--success)' }}
          role="alert"
        >
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div
          className="p-4 rounded-lg"
          style={{ background: 'var(--error-bg)', color: 'var(--error)' }}
          role="alert"
        >
          {errorMessage || 'An error occurred while sending your message. Please try again.'}
        </div>
      )}

      {/* reCAPTCHA Notice */}
      <p className="text-xs text-center" style={{ color: 'var(--text-tertiary)' }}>
        This site is protected by reCAPTCHA and the Google{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--primary-azure)' }}
        >
          Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/terms"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--primary-azure)' }}
        >
          Terms of Service
        </a>{' '}
        apply.
      </p>
    </form>
  );
}
