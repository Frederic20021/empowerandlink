

"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Calendar from "react-calendar";
import emailjs from "@emailjs/browser";

import { useLanguage } from "@/lib/i18n";
import { publicKey, serviceID, templateID } from "@/app/constants/emailjs";
import { getAssetPath } from "@/app/utils/paths";
import { FaCheckCircle } from "react-icons/fa";

export default function ServiceListing() {
  const { t } = useLanguage();
  const { serviceListing } = t.japanesePage;
  const { courses } = serviceListing;

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
      alert(serviceListing.alerts.validationError);
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
        `${serviceListing.alerts.confirmTitle}\n\n` +
          `${serviceListing.alerts.confirmService} ${activeCourse.title}\n` +
          `${serviceListing.alerts.confirmDateTime} ${appointmentDateTime}\n` +
          `${serviceListing.alerts.confirmName} ${userInfo.name}様\n` +
          `${serviceListing.alerts.confirmEmail} ${userInfo.email}\n` +
          (userInfo.phone ? `${serviceListing.alerts.confirmPhone} ${userInfo.phone}\n` : "") +
          `\n${serviceListing.alerts.confirmSend}`
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
      alert(serviceListing.alerts.success);
      resetBooking();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert(serviceListing.alerts.error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">
              {serviceListing.title}
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
                <p className="mt-2 min-h-[200px] text-sm text-gray-600 leading-relaxed">
                  {course.description}
                </p>

                 {course.features && (
                  <div className="my-4 min-h-[200px] max-h-[300px] rounded-xl bg-blue-50 p-4 ring-1 ring-blue-100 flex flex-col">
                    <p className="text-xs font-bold text-blue-900">対応言語</p>
                    <p className="mt-1 text-sm text-gray-800 whitespace-pre-line flex-1">
                      {course.features.language}
                    </p>
                    {course.features.important?.length ? (
                      <div className="mt-auto min-h-[200px] pt-3">
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
                <div className="mt-5 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-gray-900">
                      {serviceListing.estimateLabel}：{course.duration}
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {serviceListing.feeLabel}
                    </span>
                  </div>
                  {course.pricing.map((price, idx) => (
                    <div
                      key={`${course.id}-price-${idx}`}
                      className="flex items-center justify-between gap-4"
                    >
                      <p className="text-lg text-gray-500">{price.type}</p>
                      <span className="text-xl font-extrabold text-blue-700">
                        {price.price}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => openBooking(course)}
                    className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-bold text-white hover:bg-blue-700 hover:ring-2 hover:ring-blue-300 transition-all"
                  >
                    {serviceListing.bookingButton}
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
                {serviceListing.modals.calendar.title}（{activeCourse.title}）
              </h3>
              <button
                onClick={resetBooking}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label={serviceListing.modals.calendar.closeLabel}
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
              {serviceListing.modals.calendar.instruction}
            </p>
          </div>
        </div>
      )}

      {/* Step 2: Time Slots Modal */}
      {showTimeSlots && activeCourse && selectedDate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg shadow-2xl p-6 w-96 max-w-[90vw] max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">{serviceListing.modals.timeSlots.title}</h3>
              <button
                onClick={() => {
                  setShowTimeSlots(false);
                  setShowCalendar(true);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label={serviceListing.modals.timeSlots.backLabel}
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-semibold text-blue-800">{serviceListing.modals.timeSlots.contentLabel}</p>
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
              <h3 className="font-bold text-gray-800">{serviceListing.modals.userForm.title}</h3>
              <button
                onClick={() => {
                  setShowUserForm(false);
                  setShowTimeSlots(true);
                }}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
                aria-label={serviceListing.modals.userForm.backLabel}
              >
                ×
              </button>
            </div>

            <div className="mb-4 p-3 bg-blue-50 rounded">
              <p className="text-sm font-semibold text-blue-800">{serviceListing.modals.userForm.reservationLabel}</p>
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
                  {serviceListing.modals.userForm.labels.name} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder={serviceListing.modals.userForm.placeholders.name}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {serviceListing.modals.userForm.labels.email} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder={serviceListing.modals.userForm.placeholders.email}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {serviceListing.modals.userForm.labels.phone}
                </label>
                <input
                  type="tel"
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  placeholder={serviceListing.modals.userForm.placeholders.phone}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {serviceListing.modals.userForm.labels.message}
                </label>
                <textarea
                  value={userInfo.message}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, message: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
                  rows={3}
                  placeholder={serviceListing.modals.userForm.placeholders.message}
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
                    {serviceListing.modals.userForm.submitting}
                  </>
                ) : (
                  serviceListing.modals.userForm.submitIdle
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}