'use client';

type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'selection' | 'impact';

const mobileUserAgentPattern =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const hapticPatterns: Record<HapticFeedbackType, number | number[]> = {
  light: 10,
  medium: 20,
  heavy: 40,
  selection: [10],
  impact: [15, 10, 15],
};

export const useHapticFeedback = () => {
  const triggerHaptic = (type: HapticFeedbackType = 'light') => {
    if (typeof navigator === 'undefined' || !('vibrate' in navigator)) return;

    navigator.vibrate(hapticPatterns[type]);
  };

  const isMobile = () => {
    if (typeof navigator === 'undefined') return false;
    return mobileUserAgentPattern.test(navigator.userAgent);
  };

  return {
    triggerHaptic,
    isMobile,
    isSupported: typeof navigator !== 'undefined' && 'vibrate' in navigator,
  };
};
