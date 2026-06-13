import * as React from 'react';
import { View } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { AgentPrimeLoader } from '@/components/ui';
import { useAuthContext } from '@/contexts';
import { useOnboarding } from '@/hooks/useOnboarding';
import { useAccountInitialization } from '@/hooks/useAccountInitialization';

/**
 * Splash Screen
 * 
 * Shown while checking authentication and onboarding status
 * Routes user to appropriate screen based on state:
 * - Not authenticated → Sign In
 * - Authenticated + Not completed onboarding → Onboarding
 * - Authenticated + Completed onboarding → App
 * 
 * Note: Onboarding is shown every time user logs in (per user, per device)
 * If user has active billing, onboarding auto-completes after showing features
 */
export default function SplashScreen() {
  const router = useRouter();
  const { isAuthenticated, isLoading: authLoading } = useAuthContext();
  const { hasCompletedOnboarding, isLoading: onboardingLoading } = useOnboarding();
  const { isInitializing } = useAccountInitialization();

  // Route user once we have all the info
  React.useEffect(() => {
    if (!authLoading && !onboardingLoading && !isInitializing) {
      // Small delay for smooth transition
      const timeoutId = setTimeout(() => {
        if (!isAuthenticated) {
          console.log('🔐 User not authenticated, routing to sign in');
          router.replace('/auth');
        } else if (!hasCompletedOnboarding) {
          console.log('👋 User needs onboarding, routing to onboarding');
          router.replace('/onboarding');
        } else {
          console.log('✅ User authenticated and onboarded, routing to app');
          router.replace('/home');
        }
      }, 300); // Reduced delay for faster navigation

      return () => clearTimeout(timeoutId);
    }
  }, [authLoading, onboardingLoading, isInitializing, isAuthenticated, hasCompletedOnboarding, router]);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 bg-background items-center justify-center">
        <AgentPrimeLoader size="xlarge" />
      </View>
    </>
  );
}

