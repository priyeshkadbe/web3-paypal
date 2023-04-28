import Image from "next/image";
import Layout from "../components/Layout";
import Homepage from "../components/Homepage";
import { Inter } from "next/font/google";
import Welcome from "../components/Homepage/Welcome";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Layout>
        <Homepage>
          <Welcome />
        </Homepage>
      </Layout>
    </main>
  );
}
