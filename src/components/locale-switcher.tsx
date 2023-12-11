'use client'

// import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from "next/navigation"
import { Locale, i18n, flagMap, localeName } from "@/config";

// type LocaleSwitcherProps = {
//   lang?: Locale
// }

// export function LocaleSwitcher({ lang }: LocaleSwitcherProps) {
export function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const pathNameArray = pathName.split("/");
    pathNameArray[1] = locale;
    return pathNameArray.join("/");
  }

  const handleLocaleChange = ({ value }: any) => {
    router.push(redirectedPathName(value))
  };

  const options = i18n.locales.map((locale) => ({
    value: locale,
    label: <>{flagMap[locale]} {localeName[locale]}</>
  }));

  return (
    <div className="flex items-center justify-center">
      <select
        // value={lang}
        onChange={e => handleLocaleChange(e.target)}
        className="w-42 bg-transparent border outline-none rounded-md p-2 text-gray-light"
      >
        {options.map((locale) => (
          <option
            key={locale.value}
            value={locale.value}
          >
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
}
