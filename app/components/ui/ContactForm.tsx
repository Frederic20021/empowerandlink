'use client';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { serviceID, contactTemplateID, publicKey } from '@/app/constants/emailjs';

interface ContactFormProps {
  defaultSubject?: string;
}

export default function ContactForm({ defaultSubject = '' }: ContactFormProps) {

  const [formData, setFormData] = useState({
    user_name: '',
    company_name: '',
    user_email: '',
    postcode: '',
    address: '',
    phone_number: '',
    subject: defaultSubject,
    message: ''
  });

  // Update subject when defaultSubject prop changes
  useEffect(() => {
    if (defaultSubject) {
      setFormData(prev => ({ ...prev, subject: defaultSubject }));
    }
  }, [defaultSubject]);
  const [isSubmitting, setIsSubmitting] = useState(false);
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(serviceID, contactTemplateID, formData, publicKey);
      alert('メッセージが送信されました！');
      setFormData({
        user_name: '',
        company_name: '',
        user_email: '',
        postcode: '',
        address: '',
        phone_number: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.log('FAILED...', error);
      alert('送信に失敗しました。もう一度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

  const reqBTN = (type: string) => {
    return type === '必須' ? (
      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">{type}</span>
    ) : (
      <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded">{type}</span>
    );
  };

  return (
    <>
      <section className="py-8 bg-gray-50 text-black grid gap-8 justify-center px-4">
        <p className="text-[#2778FA] text-xl font-bold text-center">
          下記フォームより、ご相談ください。<br />
          <span className='text-xs'>３営業日以内に担当よりご連絡させていただきます。</span>
        </p>
        <form
          onSubmit={handleSubmit}
          className="w-full md:min-w-xl mx-auto grid bg-white text-black rounded-lg shadow-sm p-4 md:p-8 space-y-6"
        >
          {/* お名前 */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              お名前
              {reqBTN('必須')}
            </label>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              placeholder="山田　太郎"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Company */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              会社名
              {reqBTN('任意')}
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder='（法人の方は必ずご入力ください）'
              className="w-full border border-gray-300 p-3 rounded-md focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              メールアドレス
              {reqBTN('必須')}
            </label>
            <div>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                placeholder="xxxxxxxxxx@xxx.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* 郵便番号 */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              郵便番号
              {reqBTN('必須')}
            </label>
            <div>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                placeholder="000-0000"
                className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="text-xs text-gray-500 mt-2">※半角・全角どちらでもOK</p>
            </div>
          </div>

          {/* ご住所 */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              ご住所
              {reqBTN('任意')}
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="○○市○○町 000-00"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* 電話番号 */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              電話番号
              {reqBTN('任意')}
            </label>
            <div>
                <input
                  type="tel"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  placeholder="000-0000-0000"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              <p className="text-xs text-gray-500 mt-2">※半角・全角どちらでもOK</p>
            </div>
          </div>

          {/* subject */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              お題名
              {reqBTN('必須')}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* ご相談内容 */}
          <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start">
            <label className="flex justify-between items-center gap-2 text-sm font-medium text-gray-700 pt-3">
              ご相談内容
              {reqBTN('必須')}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-3 px-12 py-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
              {isSubmitting ? '送信中...' : '内容を確認する'}
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </form>
      </section>
    </>
  );
}