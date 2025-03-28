import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

// Define a type that matches the exact structure of the routing object
// type Routing = {
//     locales: readonly ["en", "gr"];
//     defaultLocale: "en" | "gr";
//     localePrefix?: unknown;
//     domains?: undefined;
//     localeCookie?: unknown;
//     alternateLinks?: boolean;
//     localeDetection?: boolean;
// };

export default getRequestConfig(async ({requestLocale}) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !routing.locales.includes(locale as "en" | "gr")) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});