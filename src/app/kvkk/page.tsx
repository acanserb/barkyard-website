import type { Metadata } from "next";
import { site, fullAddress } from "@/config/site";
import { Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "KVKK ve Gizlilik Politikası",
  description: "Barkyard Ankara kişisel verilerin korunması aydınlatma metni, gizlilik ve çerez politikası.",
  alternates: { canonical: "/kvkk/" },
  robots: { index: false, follow: true },
};

/**
 * ⚠️ BU BİR TASLAKTIR — HUKUKİ METİN DEĞİLDİR.
 * Yayına almadan önce işletmenin gerçek veri işleme süreçlerine göre
 * gözden geçirilmeli ve tercihen bir hukukçu tarafından onaylanmalıdır.
 */
export default function Page() {
  return (
    <>
      <section className="border-b border-ink-900/8 bg-cream-100">
        <Container className="py-14 sm:py-20">
          <h1 className="max-w-3xl text-4xl leading-[1.1] sm:text-5xl">KVKK ve Gizlilik Politikası</h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Bu metin taslaktır ve yayına alınmadan önce işletmenin gerçek veri işleme süreçlerine
            göre güncellenmelidir.
          </p>
        </Container>
      </section>

      <Section tone="cream">
        <div className="max-w-3xl space-y-8 text-[16px] leading-relaxed text-ink-700">
          <div>
            <h2 className="mb-3 text-2xl text-ink-900">Veri sorumlusu</h2>
            <p>
              {site.legalName} ({site.name}) — {fullAddress}. İletişim: {site.email},{" "}
              {site.phoneDisplay}
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl text-ink-900">İşlenen kişisel veriler</h2>
            <p>
              Site üzerindeki iletişim formu ve WhatsApp kanalı aracılığıyla; ad soyad, telefon
              numarası, e-posta adresi, köpeğinize ilişkin verdiğiniz bilgiler ve talebinize dair
              paylaştığınız içerikler işlenmektedir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl text-ink-900">İşleme amacı ve hukuki sebep</h2>
            <p>
              Verileriniz yalnızca talebinize dönüş yapmak, hizmet sürecini yürütmek ve yasal
              yükümlülükleri yerine getirmek amacıyla işlenir. Hukuki sebep, 6698 sayılı Kanun
              kapsamında sözleşmenin kurulması ve ifası ile veri sorumlusunun meşru menfaatidir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl text-ink-900">Aktarım</h2>
            <p>
              Verileriniz, hizmetin yürütülmesi için zorunlu olan haller (ör. acil durumda veteriner
              hekim) ve yasal olarak yetkili kurumlar dışında üçüncü kişilerle paylaşılmaz, satılmaz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl text-ink-900">Çerezler</h2>
            <p>
              Sitede, ziyaret istatistiklerini ölçmek ve reklam performansını değerlendirmek amacıyla
              çerezler kullanılabilir. Analitik ve reklam çerezleri, onayınız verilmeden
              çalıştırılmaz. Tarayıcı ayarlarınızdan çerez tercihlerinizi her zaman
              değiştirebilirsiniz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-2xl text-ink-900">Haklarınız</h2>
            <p>
              KVKK 11. madde kapsamında verilerinize erişme, düzeltilmesini veya silinmesini isteme
              ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi {site.email} adresine
              iletebilirsiniz.
            </p>
          </div>

          <p className="text-[14px] text-ink-500">
            {/* TODO: Saklama süreleri, varsa kamera kaydı uygulaması ve başvuru usulü eklenmeli. */}
            TODO: Saklama süreleri, tesiste kamera kaydı yapılıp yapılmadığı ve başvuru usulü bu
            bölüme eklenmelidir.
          </p>
        </div>
      </Section>
    </>
  );
}
