import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/nea-header-logo.png";
import BillForm from "@/components/forms/bill-form";

export default function Home() {
  return (
    <>
      <Link href="https://nea.org.np">
        <Image
          src={logo}
          alt="Nea Logo"
          width={360}
          priority
          className="h-18"
        />
      </Link>
      <Card className="w-full max-w-md rounded-md">
        <CardContent className="p-4">
          <BillForm />
        </CardContent>
      </Card>
    </>
  );
}
