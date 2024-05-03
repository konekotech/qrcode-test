import Image from "next/image";
import {ThemeSwitch} from "@/app/themeSwitch";
import Qr_Camera from "@/component/qr_camera";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <ThemeSwitch />
          <Qr_Camera />
        <button className="bg-indigo-700 font-semibold text-white py-2 px-4 rounded">始める</button>

      </main>
  );
}
