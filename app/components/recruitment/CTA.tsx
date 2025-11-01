import ContactButton from "../ui/contactButton"
import ContactButtonIframe from "../ui/ContactButtonIframe"

export default function CTA() {
  return (
    <>
    {/* CTA Section */}
      <section className="py-20 px-6 text-center text-gray-800 bg-white">
        <h2 className="text-3xl font-bold mb-6">
          世界と日本をつなぐ新しいキャリアの第一歩を
        </h2>
        <p className="mb-8 max-w-2xl mx-auto">
          あなたの未来を共に創り上げましょう。
        </p>
        <ContactButtonIframe pageName="人材紹介事業に関して" />
      </section>
    </>
  )
}