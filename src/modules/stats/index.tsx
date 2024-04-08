import { ScrollShadow } from "@nextui-org/react";
import { BarChart } from "../../components/charts/Bar";
import { LineChart } from "../../components/charts/Line";
import { MdQueryStats } from "react-icons/md";
import { TbCalendarStats } from "react-icons/tb";
import { BiStats } from "react-icons/bi";
import PageLayout from "../../layout/private-layout";

const StatsPage = () => {
  // useEffect(() => {
  //   document.title = "Statistikalar";
  // }, []);

  return (
    <div className="w-full sm:w-[calc(100vw-260px)] h-[100vh] bg-[#F5F7FA] dark:bg-[#2A2A2A]">
      <PageLayout header="Statistikalar">
        <ScrollShadow visibility="bottom">
          <div className="pt-6 h-[92vh] 2xl:h-[94vh]">
            <h1 className="text-xl font-medium pb-2">
              Sana oralig'ini tanlang
            </h1>
            <div className="flex gap-4"></div>

            <h1 className="text-xl font-medium pb-2">Umimiy savdo</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map(({ title, value, icon }, index) => (
                <div key={index}>
                  <div className="p-6 bg-white dark:bg-black rounded-md flex items-center justify-center gap-6">
                    <div>{icon}</div>
                    <div>
                      <h1>{title}</h1>
                      <h1 className="font-semibold">{value}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h1 className="text-xl font-medium pt-10">Haftalik statistika</h1>
              <BarChart />
              <h1 className="text-xl font-medium pt-10">Oylik statistika</h1>
              <LineChart />
              <div className="h-[4vh]"></div>
            </div>
          </div>
        </ScrollShadow>
      </PageLayout>
    </div>
  );
};

export default StatsPage;

const data = [
  {
    title: "Umumiy savdo",
    icon: <MdQueryStats size={36} color="#2D60FF" />,
    value: 1234,
  },
  {
    title: "Bugungi savdo",
    icon: <TbCalendarStats size={36} color="#2D60FF" />,
    value: 1234,
  },
  {
    title: "Oylik savdo",
    icon: <BiStats size={36} color="#2D60FF" />,
    value: 1234,
  },
];
