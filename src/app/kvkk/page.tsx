import { site, fullAddress } from "@/config/site";
import { PageHero, Section } from "@/components/ui";
import { InfoIcon } from "@/components/icons";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "KVKK Aydınlatma Metni ve Gizlilik",
  description: "Barkyard Ankara kişisel verilerin korunması aydınlatma metni taslağı, gizlilik ve çerez bilgisi.",
  path: "/kvkk/",
  noindex: true,
});

/*
 * ⚠️ BU METİN BİR TASLAKTIR — NİHAİ HUKUKİ METİN DEĞİLDİR.
 *
 * Aşağıdaki bölümlerde yalnızca sitenin bugünkü teknik yapısından DOĞRULANABİLEN
 * bilgiler kesin dille yazılmıştır (form verisi saklanmıyor, çerez kullanılmıyor vb.).
 * İşletmeden teyit edilmesi gereken bilgiler "işletme tarafından tamamlanacaktır"
 * şeklinde açıkça belirtilmiştir. Eksik bilgilerin listesi için teslim raporuna bakın.
 *
 * Bir hukuk uzmanı onaylamadan bu sayfadan taslak uyarısını KALDIRMAYIN.
 * Sitede GTM/GA4, Meta Pixel veya gömülü Google haritası etkinleştirilirse
 * "Çerezler" bölümü ve çerez onay mekanizması güncellenmelidir.
 */

const pending = "Bu bilgi işletme tarafından tamamlanacaktır.";

export default function Page() {
  return (
    <>
      <PageHero crumb="KVKK ve Gizlilik" title="KVKK aydınlatma metni ve gizlilik" />

      <Section tone="paper">
        <div className="max-w-3xl">
          <div role="note" className="flex gap-3 rounded-[var(--radius-card)] border-2 border-clay-600/30 bg-clay-100 p-5 text-[16px] leading-relaxed text-ink-900">
            <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-clay-600" />
            <p>
              <strong className="font-semibold">Taslak metin.</strong> Bu sayfa hazırlık aşamasındadır ve henüz hukuki
              onaydan geçmemiştir. Bazı bölümler işletme tarafından tamamlanacaktır. Sorularınız için{" "}
              <a href={`mailto:${site.email}`} className="font-semibold underline underline-offset-2">
                {site.email}
              </a>{" "}
              adresine yazabilirsiniz.
            </p>
          </div>

          <div className="mt-10 space-y-9 text-[17px] leading-relaxed text-ink-700">
            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Veri sorumlusu</h2>
              <p>
                {site.legalName ? `${site.legalName} (${site.name})` : site.name}, {fullAddress}. İletişim:{" "}
                {site.email}, {site.phoneDisplay}.
              </p>
              {!site.legalName && <p className="mt-2 text-[15px] text-ink-500">Resmî unvan: {pending}</p>}
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Web sitesindeki iletişim formu</h2>
              <p>
                İletişim formuna yazdığınız bilgiler (ad soyad, telefon, köpeğinizin ırkı ve yaşı, ilgilendiğiniz
                hizmet ve ek açıklama) web sitemizin sunucusuna gönderilmez ve site tarafından kaydedilmez. Form
                yalnızca bu bilgilerle bir WhatsApp mesajı hazırlar. Mesaj, siz WhatsApp üzerinden gönderdiğinizde
                bize ulaşır.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">İşlenen kişisel veriler</h2>
              <p>
                WhatsApp, telefon veya e-posta ile bize ulaştığınızda paylaştığınız iletişim bilgileriniz ve
                köpeğinize ilişkin bilgiler işlenir. Hizmet sürecinde işlenen diğer veriler (ör. konaklama bilgi
                formu, veteriner ve acil durum iletişim bilgileri): {pending}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">İşleme amaçları ve hukuki sebepler</h2>
              <p>
                Verileriniz talebinize dönüş yapmak ve talep ettiğiniz hizmeti yürütmek amacıyla işlenir. Her işleme
                faaliyetinin 6698 sayılı Kanun kapsamındaki hukuki sebebi: {pending}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Aktarım</h2>
              <p>
                Verilerin aktarıldığı taraflar ve aktarım koşulları (ör. acil durumda veteriner hekim, yetkili
                kurumlar, WhatsApp hizmet sağlayıcısı): {pending}
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Saklama süreleri</h2>
              <p>{pending}</p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Tesiste kamera kaydı</h2>
              <p>Tesiste kamera kaydı yapılıp yapılmadığı ve yapılıyorsa kayıtların kullanımı: {pending}</p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Çerezler</h2>
              <p>
                Bu web sitesi şu anda analitik, reklam veya pazarlama amaçlı çerez kullanmamaktadır; ziyaretçi
                istatistiği ölçen bir araç yüklü değildir. Yazı tipleri ve görseller kendi sunucumuzdan yüklenir.
                &quot;Yol tarifi&quot; ve &quot;WhatsApp&quot; bağlantılarına tıkladığınızda Google Haritalar ve WhatsApp
                kendi sayfalarında açılır; bu sayfalarda ilgili şirketlerin gizlilik politikaları geçerlidir.
              </p>
              <p className="mt-3">
                İleride analitik veya reklam çerezleri kullanılmaya başlanırsa, bu çerezler onayınız alınmadan
                çalıştırılmayacak ve bu metin güncellenecektir.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-[1.5rem] text-ink-900">Haklarınız ve başvuru</h2>
              <p>
                6698 sayılı Kanun&apos;un 11. maddesi kapsamında kişisel verilerinizin işlenip işlenmediğini öğrenme,
                düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme gibi haklara sahipsiniz. Başvuru
                yöntemi ve başvuru adresi: {pending}
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
