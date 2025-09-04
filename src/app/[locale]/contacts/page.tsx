import { ShortContactForm } from '@/features/contact-form/ui/short-contact-form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export default function ContactsPage() {
  return (
    <main className="flex flex-col gap-[60px] px-[160px] py-[80px] max-md:px-4 max-md:py-[64px]">
      <section className="flex flex-col gap-2.5 text-center">
        <Title>Always Here to Help</Title>
        <Text color="faded">
          Have questions or issues? Reach out. We’re just a message away!
        </Text>
      </section>
      <section className="mx-auto w-[600px] max-md:mx-0 max-md:w-full">
        <ShortContactForm />
      </section>
    </main>
  );
}
