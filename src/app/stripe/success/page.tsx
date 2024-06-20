
import { Button } from "@/components/ui/button";
import { CircleCheck  } from "lucide-react";
import Link from "next/link";
import {ShieldCheck} from "lucide-react"
export default function stripeSuccess() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CircleCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for you pruchase We hope you enjoy it
          </p>
          <p>Have a great day!</p>
         <Link href={"/"}>
          <Button className="mt-3">
          Go Back
        </Button>
        </Link>
        </div>
      </div>
    </div>
  );
}
