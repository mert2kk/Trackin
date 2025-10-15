<template>
  <div
    class="relative flex flex-col items-center p-8 bg-[#F5AF00] bg-opacity-80 rounded-xl shadow-lg"
  >
    <div class="flex flex-col items-center">
      <header class="flex flex-col items-center mb-10">
        <div class="text center font-bold text-lg font-serif">
          Stay on Track
        </div>

        <div class="mx-auto">
          <RouterLink to="/">
            <img
              src="/images/logo.png"
              alt="logo"
              class="w-[120px] h-[120px] customSm:w-[100px] customSm:h-[1000px]"
            />
          </RouterLink>
        </div>

        <div class="text center font-bold text-lg">
          Join & Boost Your Productivity
        </div>
        <div class="text-center text-sm mb-4 font-semibold">
          Keep track of your tasks, see your report, and chain your work
        </div>
      </header>
      <section class="flex flex-col h-[400px] items-center mb-4">
        <button
          class="bg-[#EBEBEB] opacity-80 rounded-lg px-4 py-2 hover:scale-105 transition-all font-semibold flex items-center flex-row text-sm"
          @click="handleGoogleSignIn"
        >
          <img
            src="/images/google.png"
            alt="google"
            class="w-[25px] h-[25px] customSm:w-[15px] customSm:h-[15px] mr-4"
          />
          Continue with Google
        </button>

        <v-divider thickness="1px" opacity="40" class="my-6 w-[250px]">
          <h3 class="font-semibold">Or</h3>
        </v-divider>

        <h3 class="font-semibold mb-4">Sign In with Email</h3>
        <div>
          <v-text-field
            label=" Email"
            required
            type="email"
            variant="solo"
            rounded="lg"
            min-width="300px"
          ></v-text-field>
          <v-text-field
            label=" Password"
            required
            type="password"
            variant="solo"
            rounded="lg"
            min-width="300px"
          ></v-text-field>
          <div class="text-xs flex justify-end p-[0.5] mr-2 font-semibold">
            <button>Forgot password?</button>
          </div>
        </div>
        <button
          class="bg-[#000000] rounded-xl text-[#EBEBEB] px-6 py-2 font-semibold mt-6"
        >
          Sign In
        </button>
        <div class="text-sm mt-4 flex items-center gap-2">
          Don't have an account?
          <RouterLink to="/signup" class="text-[#000000] font-semibold">
            Create Account
          </RouterLink>
        </div>
      </section>
    </div>
    <footer>
      <div class="text-xs mt-4">
        By signing up, you agree to our Terms & Conditions and Privacy Policy
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
const GOOGLE_CLIENT_ID = useRuntimeConfig().public.googleClientId;

const handleGoogleSignIn = async () => {
  const google = (window as any).google;
  if (!google) return alert("Google SDK not loaded");

  console.log("Google SDK loaded", google.accounts.id);
  google.accounts.id.initialize({
    client_id: GOOGLE_CLIENT_ID,
    callback: async (response: Credential) => {
      console.log("Google response:", response);
      const tokenId = response.id; // Google idToken
      console.log("idToken:", tokenId);

      // 3️⃣ Token'i backend'e gönder
      try {
        const res = await fetch("http://localhost:8000/api/auth/google", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ tokenId }),
        });

        const data = await res.json();
        console.log("Backend response:", data); // { user, token }
      } catch (err) {
        console.error(err);
      }
    },
  });

  google.accounts.id.prompt();
};
</script>

<style></style>
