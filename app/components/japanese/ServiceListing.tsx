"use client";

import Image from "next/image";
import React, { useState } from "react";
import Calendar from 'react-calendar';
import emailjs from '@emailjs/browser';
import { getAssetPath } from "../../utils/paths";
import { courses } from "@/app/constants/japanese";
import { serviceID, templateID, publicKey } from "@/app/constants/emailjs";
import 'react-calendar/dist/Calendar.css';

// Individual service card component
const ServiceCard = ({ course }: { course: (typeof courses)[0] }) => {
  // Booking flow states
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [paymentApplication, setPaymentApplication] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available time slots
  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', 
    '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
  ];

  // Step 1: Handle date selection
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setShowCalendar(false);
      setShowTimeSlots(true);
    }
  };

  // Step 2: Handle time selection  
  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setShowTimeSlots(false);
    setShowUserForm(true);
  };

  // Step 3: Handle booking submission
  const handleBookingSubmit = async () => {
    if (!userInfo.name || !userInfo.email) {
      alert('お名前とメールアドレスは必須項目です。');
      return;
    }

    setIsSubmitting(true);
  
    if (selectedDate && selectedTime) {
      const formattedDate = selectedDate.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
      });
      
      const appointmentDateTime = `${formattedDate} ${selectedTime}`;
      
      try {
        const confirmPayment = confirm(
          `予約内容をご確認ください\n\n` +
          `📚 コース名: ${course.title}\n` +
          `📅 ご希望日時: ${appointmentDateTime}\n` +
          `👤 お名前: ${userInfo.name}様\n` +
          `📧 メールアドレス: ${userInfo.email}\n` +
          (paymentApplication ? `💰 お支払い金額: ${course.pricing.price}\n\n` +
          `上記の内容でよろしければ「OK」を押して決済手続きへ進んでください。` : '')
        );
        
        if (!confirmPayment) {
          return;
        }
        
        
        const bookingInfo = {
          to_email: 'h.kadoya@empowerandlink.com',
          from_name: userInfo.name,
          from_email: userInfo.email,
          customer_phone: userInfo.phone || '未記入',
          course_name: course.title,
          course_price: course.pricing.price,
          course_duration: course.pricing.duration,
          appointment_datetime: appointmentDateTime,
          customer_message: userInfo.message || '特になし',
          subject: `【新規予約・決済完了待ち】${course.title} - ${userInfo.name}様`,
          timestamp: new Date().toISOString()
        };
        
        sessionStorage.setItem('pendingBooking', JSON.stringify(bookingInfo));
        
        alert(
          `✅ 予約情報を受け付けました！\n\n` +
          `次のページでお支払い手続きを完了してください。\n` +
          `決済完了後に確認メールをお送りいたします。`
        );

        const templateParams = {
          ...bookingInfo,
          subject: `【新規予約申込】${course.title} - ${userInfo.name}様（決済手続き中）`
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
          .catch(error => console.error('Background email error:', error));
        
        resetBooking();
      } catch (error) {
        console.error('EmailJS error:', error);
        alert(
          `申し訳ございません。送信中にエラーが発生いたしました。\n\n` +
          `📧 EmailJS の設定が必要です。\n` +
          `🔧 開発者にお問い合わせいただくか、\n` +
          `📞 お急ぎの場合は直接お電話にてご連絡ください。\n\n` +
          `ご不便をおかけして申し訳ございません。`
        );
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Reset all booking states
  const resetBooking = () => {
    setShowCalendar(false);
    setShowTimeSlots(false);
    setShowUserForm(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserInfo({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const handleBookingButtonClick = () => {
    if (selectedDate && selectedTime && userInfo.name) {
      resetBooking();
    } else {
      setShowCalendar(true);
    }
  };

  const getButtonText = () => {
    if (selectedDate && selectedTime && userInfo.name) {
      return '予約をリセット';
    } else {
      return 'オンライン面談を\n申し込む';
    }
  };

  return (
    <div className={`rounded-lg shadow-xl overflow-hidden max-w-sm mx-auto`}>
      {/* Top Image */}
      <div className="relative h-48">
        <Image
          src={getAssetPath(course.image)}
          alt={course.title}
          fill
          className="object-cover"
        />
      </div>
        
        {/* Title */}
        <h3 className="text-center mt-4 font-bold text-gray-800 text-lg">
          {course.title}
        </h3>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        {/* Pricing Info */}
        <div className="flex items-center justify-center gap-2 text-black">
          <span className="text-lg">🕐</span>
          <span className="font-bold">{course.pricing.duration}</span>
          <span className="text-xl font-bold text-blue-600">{course.pricing.price}</span>
        </div>

        {/* Features Tags */}
        <div className="flex flex-wrap gap-2 justify-center">
          {course.tags.map((tag, index) => (
            <span
              key={index}
              className={`bg-black text-white px-3 py-1 rounded-full text-sm font-semibold`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed text-center">
          {course.description}
        </p>

        {/* Free Trial Info */}
        <div className="text-black text-left text-sm justify-center bg-gray-300 rounded-lg">
            <ul className=" p-4 space-y-2 list-disc list-inside font-bold">
                <li>{course.features.language}</li>
                {course.features.important.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
            </ul>
        </div>

        {/* Professor Info */}
        <div className="text-center">
          <span className="inline-block bg-gradient-to-r from-blue-400 to-blue-800 text-white px-4 py-2 rounded-lg font-bold text-sm">
            担当講師: {course.prof}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            onClick={handleBookingButtonClick}
          >
            <span className="whitespace-pre-line text-sm">{getButtonText()}</span>
          </button>

        </div>
      </div>

      {/* Modals */}
      {/* Step 1: Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">
                📅 STEP 1: {paymentApplication ? "面談希望日程を選択して下さい" : "日程を選択して下さい"}
              </h3>
              <button
                onClick={() => { setShowCalendar(false); setPaymentApplication(false); }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
              minDate={new Date()}
              className="w-full text-black"
              locale="ja-JP"
            />
            <p className="mt-3 text-sm text-gray-600">
              ご希望の日付をクリックしてください
            </p>
          </div>
        </div>
      )}

      {/* Step 2: Time Slots Modal */}
      {showTimeSlots && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">
                ⏰ STEP 2: 時間を選択
              </h3>
              <button
                onClick={() => {
                  setShowTimeSlots(false);
                  setShowCalendar(true);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              選択日:{" "}
              {selectedDate?.toLocaleDateString("ja-JP", {
                year: "numeric",
                month: "long",
                day: "numeric",
                weekday: "long",
              })}
            </p>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelection(time)}
                  className="p-2 text-sm text-black border rounded hover:bg-blue-50 hover:border-blue-500"
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Step 3: User Information Form Modal */}
      {showUserForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">
                👤 STEP 3: お客様情報
              </h3>
              <button
                onClick={() => {
                  setShowUserForm(false);
                  setShowTimeSlots(true);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-semibold text-blue-800">予約内容</p>
              <p className="text-xs text-blue-600">
                {course.title}
                <br />
                {selectedDate?.toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}{" "}
                {selectedTime}
              </p>
            </div>

            <form className="space-y-4 text-black">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="田中太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  電話番号
                </label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  メッセージ・ご要望
                </label>
                <textarea
                  value={userInfo.message}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, message: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  rows={3}
                  placeholder="ご質問やご要望があればお書きください"
                />
              </div>

              <button
                type="button"
                onClick={handleBookingSubmit}
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    処理中...
                  </>
                ) : (
                  "予約リクエストを送信"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Main service listing section
const ServiceListing = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            提供コース一覧・サービス一覧
          </h2>
        </div>

        {/* Service cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <ServiceCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceListing;
