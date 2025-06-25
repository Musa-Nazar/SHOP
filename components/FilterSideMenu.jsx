import Image from "next/image";
import Line from "./Line";

function FilterSideMenu() {
  const xml = (
    <aside className="flex-[0_0_29.5rem] py-[2rem] px-[2.4rem] border border-[rgba(0,0,0,.1)] rounded-[2rem] flex flex-col gap-[2.4rem] max-lg:fixed max-lg:invisible">
      {/* TILE 1 */}
      <section className="flex justify-between items-center">
        <h3 className="satoshi-bold text-[2rem] leading-[2.7rem] text-black font-bold">
          Filters
        </h3>
        <Image src="/assets/filter.png" alt="filter" width={24} height={24} />
      </section>
      <Line not={true} />
      {/* TILE 2 */}
      <ul className="flex flex-col gap-[2.25rem]">
        <li className="flex justify-between items-center">
          <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
            T-shirts
          </span>
          <img src="/assets/gt.png" alt="gt" />
        </li>
        <li className="flex justify-between items-center">
          <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
            Shorts
          </span>
          <img src="/assets/gt.png" alt="gt" />
        </li>
        <li className="flex justify-between items-center">
          <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
            Shirts
          </span>
          <img src="/assets/gt.png" alt="gt" />
        </li>
        <li className="flex justify-between items-center">
          <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
            Hoodie
          </span>
          <img src="/assets/gt.png" alt="gt" />
        </li>
        <li className="flex justify-between items-center">
          <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
            Jeans
          </span>
          <img src="/assets/gt.png" alt="gt" />
        </li>
      </ul>
      <Line not={true} />
      {/* TILE 3 */}
      <section>
        <div className="flex justify-between items-center mb-[2rem]">
          <h3 className="satoshi-bold text-[2rem] leading-[2.7rem] font-bold text-black">
            Price
          </h3>
          <img src="/assets/gt.png" alt="gt" className="rotate-[-90deg]" />
        </div>
        <div className="flex justify-center items-center w-full h-[0.6rem] rounded-[2rem] bg-[#F0F0F0] mb-[1rem]">
          <div className="w-[2rem] h-[2rem] rounded-[50%] bg-black flex-none"></div>
          <div className="w-[12.6rem] bg-black h-full"></div>
          <div className="w-[2rem] h-[2rem] rounded-[50%] bg-black flex-none"></div>
        </div>
        <div className="flex gap-[11.5rem] justify-center items-center">
          <p className="satoshi-500 font-[500] text-[1.4rem] leading-[1.9rem] text-black text-center">
            $50
          </p>
          <p className="satoshi-500 font-[500] text-[1.4rem] leading-[1.9rem] text-black  text-center">
            $200
          </p>
        </div>
      </section>
      <Line not={true} />
      {/* TILE 4 */}
      <section>
        <div className="flex justify-between items-center mb-[2rem]">
          <h3 className="satoshi-bold text-[2rem] leading-[2.7rem] font-bold text-black">
            Colors
          </h3>
          <img src="/assets/gt.png" alt="gt" className="rotate-[-90deg]" />
        </div>
        <div className="flex gap-[1.5rem] flex-wrap">
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#00C12B] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#F50606] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#F5DD06] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#F57906] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#06CAF5] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#063AF5] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#CCCCCC] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#F506A4] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#FFFFFF] border border-[rgba(0,0,0,.2)]"></div>
          <div className="w-[3.7rem] aspect-square rounded-[50%] bg-[#000000] border border-[rgba(0,0,0,.2)]"></div>
        </div>
      </section>
      <Line not={true} />
      {/* TILE 5 */}
      <section>
        <div className="flex justify-between items-center mb-[2rem]">
          <h3 className="satoshi-bold text-[2rem] leading-[2.7rem] font-bold text-black">
            Size
          </h3>
          <img src="/assets/gt.png" alt="gt" className="rotate-[-90deg]" />
        </div>
        <div className="flex gap-[0.8rem] flex-wrap">
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            XX-Small
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            X-Small
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            Small
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            Medium
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            Large
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            X-Large
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            XX-Large
          </span>
          <span className="block rounded-[6.2rem] bg-[#F0F0F0] py-[1rem] px-[2rem] leading-[1.9rem] satoshi-regular text-[1.4rem] text-black/60">
            4X-Large
          </span>
        </div>
      </section>
      <Line not={true} />
      {/* TILE 6 */}
      <section>
        <div className="flex justify-between items-center mb-[2rem]">
          <h3 className="satoshi-bold text-[2rem] leading-[2.7rem] text-black font-bold">
            Dress Style
          </h3>
          <img src="/assets/gt.png" alt="gt" className="rotate-[-90deg]" />
        </div>
        <ul className="flex flex-col gap-[2.25rem] mb-[2.5rem]">
          <li className="flex justify-between items-center">
            <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
              Casual
            </span>
            <img src="/assets/gt.png" alt="gt" />
          </li>
          <li className="flex justify-between items-center">
            <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
              Formal
            </span>
            <img src="/assets/gt.png" alt="gt" />
          </li>
          <li className="flex justify-between items-center">
            <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
              Party
            </span>
            <img src="/assets/gt.png" alt="gt" />
          </li>
          <li className="flex justify-between items-center">
            <span className="satoshi-regular text-black/60 leading-[2.2rem] text-[1.6rem]">
              Gym
            </span>
            <img src="/assets/gt.png" alt="gt" />
          </li>
        </ul>
      </section>

      <button className="bg-black rounded-[6.2rem] py-[1.6rem] px-[5.4rem] text-[1.4rem] leading-[1.9rem] satoshi-500 font-[500] text-white cursor-pointer">
        Apply Filter
      </button>
    </aside>
  );
  return xml;
}

export default FilterSideMenu;
