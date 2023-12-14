'use client'

import { usePathname, useRouter } from "next/navigation"
import { Locale, i18n, flagMap, localeName } from "@/config";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type LocaleSwitcherProps = {
  lang?: Locale
}

export function LocaleSwitcher({ lang  }: LocaleSwitcherProps) {
  const pathName = usePathname()
  const router = useRouter()

  const [locale, setLocale] = useState<Locale>(lang as Locale);

  useEffect(() => {
    setLocale(lang as Locale)
  }, [lang])

  const redirectedPathName = (locale: Locale) => {
    if (!pathName) return "/";
    const pathNameArray = pathName.split("/");
    pathNameArray[1] = locale;
    return pathNameArray.join("/");
  }

  const handleLocaleChange = ({ value }: any) => {
    setLocale(value)
    router.push(redirectedPathName(value))
  };

  const options = i18n.locales.map((locale) => ({
    value: locale,
    label: <>{flagMap[locale]} {localeName[locale]}</>
  }));

  return (
    <div className="flex items-center justify-center">
      <label htmlFor="select-language" className="sr-only">Language Select</label>
      <select
        id='select-language'
        value={locale}
        onChange={e => handleLocaleChange(e.target)}
        className={twMerge(
          "w-42 bg-transparent border border-primary-light outline-none rounded-md p-2 cursor-pointer",
          'text-gray-light'
        )}
      >
        {options.map((locale) => (
          <option
            key={locale.value}
            value={locale.value}
            className="p-2 bg-transparent text-background-dark font-bold"
          >
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
}
