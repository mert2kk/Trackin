export default defineNuxtPlugin((nuxtApp) => {
    // Uygulama başlamadan önce SDK'nın hazır olduğundan emin olmamız gerekiyor.
    return new Promise<void>((resolve) => {

        const checkGoogleSdk = () => {

            if ((window as any).google && (window as any).google.accounts && (window as any).google.accounts.id && (window as any).google.accounts.id.initialize) {

                console.log("[Auth Plugin] Google SDK başarıyla initialize edildi.");
                resolve();

            } else {
                setTimeout(checkGoogleSdk, 50);
            }
        };

        checkGoogleSdk();
    });
})
