

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import emailjs from "@emailjs/browser";

import { courses } from "@/app/constants/japanese";
import { publicKey, serviceID, templateID } from "@/app/constants/emailjs";
import { getAssetPath } from "@/app/utils/paths";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceListing() {
  const timeSlots = useMemo(
    () => [
      "09:00",
      "10:00",
      "11:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ],
    []
  );

  const [activeCourse, setActiveCourse] = useState<(typeof courses)[0] | null>(
    null
  );
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetBooking = () => {
    setShowCalendar(false);
    setShowTimeSlots(false);
    setShowUserForm(false);
    setSelectedDate(null);
    setSelectedTime(null);
    setUserInfo({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
    setActiveCourse(null);
  };

  const openBooking = (course: (typeof courses)[0]) => {
    setActiveCourse(course);
    setSelectedDate(null);
    setShowTimeSlots(false);
    setShowCalendar(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (value: any) => {
    if (value instanceof Date) {
      setSelectedDate(value);
      setShowCalendar(false);
      setShowTimeSlots(true);
    }
  };

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
    setShowTimeSlots(false);
    setShowUserForm(true);
  };

  const handleBookingSubmit = async () => {
    if (!activeCourse || !selectedDate || !selectedTime) return;

    if (!userInfo.name || !userInfo.email) {
      alert("お名前とメールアドレスは必須項目です。");
      return;
    }

    setIsSubmitting(true);

    const formattedDate = selectedDate.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    });

    const appointmentDateTime = `${formattedDate} ${selectedTime}`;

    try {
      const confirmSend = confirm(
        `相談内容をご確認ください\n\n` +
          `📚 サービス: ${activeCourse.title}\n` +
          `📅 ご希望日時: ${appointmentDateTime}\n` +
          `👤 お名前: ${userInfo.name}様\n` +
          `📧 メール: ${userInfo.email}\n` +
          (userInfo.phone ? `📞 電話: ${userInfo.phone}\n` : "") +
          `\n上記の内容で送信します。よろしいですか？`
      );

      if (!confirmSend) {
        setIsSubmitting(false);
        return;
      }

      const templateParams = {
        to_email: "h.kadoya@empowerandlink.com",
        from_name: userInfo.name,
        from_email: userInfo.email,
        customer_phone: userInfo.phone || "未記入",
        customer_message: userInfo.message || "特になし",
        course_name: activeCourse.title,
        course_price: activeCourse.pricing.map(p => p.price).join(", "),
        course_duration: activeCourse.duration ?? "",
        appointment_datetime: appointmentDateTime,
        subject: `【新規相談予約】${activeCourse.title} - ${userInfo.name}様`,
        timestamp: new Date().toISOString(),
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      alert("✅ 送信しました！担当者よりご連絡いたします。");
      resetBooking();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(
        `申し訳ございません。送信中にエラーが発生いたしました。\n\n` +
          `📧 EmailJS の設定をご確認ください。\n` +
          `お急ぎの場合はお電話にてご連絡ください。`
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              サービス一覧
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition-shadow hover:shadow-md"
            >
              <div className="relative h-48">
                <Image
                  src={getAssetPath(course.image)}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag, idx) => (
                    <span
                      key={`${course.id}-tag-${idx}`}
                      className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">
                    {course.payType}
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-extrabold">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {course.description}
                </p>
                {course.id != 1 && (<br />)}

                 {course.features && (
                  <div className="my-4 md:h-60 rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100 flex flex-col">
                    <p className="text-xs font-bold text-blue-900">対応言語</p>
                    <p className="mt-1 text-sm text-gray-800 whitespace-pre-line flex-1">
                      {course.features.language}
                    </p>
                    {course.features.important?.length ? (
                      <div className="mt-auto pt-3">
                        <ul className="space-y-2">
                          {course.features.important.map((item, idx) => (
                            <li
                              key={`${course.id}-imp-${idx}`}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <FaCheckCircle className=" h-4 w-4 text-green-600" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                )}
                <div className="mt-5 flex items-center justify-between">
                  <div className="grid">
                    <span className="text-sm font-bold text-gray-900">
                      目安：{course.duration}
                    </span>

                    {course.pricing.map((price, idx) => (
                      <div
                        key={`${course.id}-price-${idx}`}
                        className="text-left"
                      >
                        <p className="text-lg text-gray-500">{price.type}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid text-right">
                    <span className="text-sm font-bold text-gray-900">
                      料金
                    </span>
                    {course.pricing.map((price, idx) => (
                      <div
                        key={`${course.id}-price-amount-${idx}`}
                        className="text-right"
                      >
                        <span className="text-xl font-extrabold text-blue-700">
                          {price.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => openBooking(course)}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 hover:ring-2 hover:ring-blue-300 transition-all"
                  >
                    この内容で相談する
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Step 1: Calendar Modal */}
      {showCalendar && activeCourse && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="relative bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">
                📅 日程を選択して下さい（{activeCourse.title}）
              </h3>
              <button
                onClick={resetBooking}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label="閉じる"
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
      {showTimeSlots && activeCourse && selectedDate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">⏰ 時間を選択</h3>
              <button
                onClick={() => {
                  setShowTimeSlots(false);
                  setShowCalendar(true);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label="戻る"
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-semibold text-blue-800">相談内容</p>
              <p className="text-xs text-blue-600">
                {activeCourse.title}
                <br />
                {selectedDate.toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  weekday: "long",
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
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
      {showUserForm && activeCourse && selectedDate && selectedTime && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">👤 お客様情報</h3>
              <button
                onClick={() => {
                  setShowUserForm(false);
                  setShowTimeSlots(true);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label="戻る"
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-semibold text-blue-800">予約内容</p>
              <p className="text-xs text-blue-600">
                {activeCourse.title}
                <br />
                {selectedDate.toLocaleDateString("ja-JP", {
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
    </section>
  );
}