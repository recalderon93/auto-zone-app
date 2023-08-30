const inset = { top: 0, right: 0, bottom: 0, left: 0 };

export const SafeAreaProvider = jest.fn().mockImplementation(({ children }) => children);
export const SafeAreaConsumer = jest.fn().mockImplementation(({ children }) => children(inset));
export const SafeAreaView = jest.fn().mockImplementation(({ children }) => children);
export const useSafeAreaInsets = jest.fn().mockImplementation(() => inset);
