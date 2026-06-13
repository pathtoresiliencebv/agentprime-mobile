# AgentPrime Mobile App

Modern React Native + Expo mobile application with centralized API layer.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run on specific platform
npm run ios      # iOS Simulator
npm run android  # Android Emulator
npm run web      # Web browser
```

## 📁 Project Structure

```
apps/mobile/
├── api/                    # Centralized API layer (ALL API code)
│   ├── client.ts          # HTTP client
│   ├── config.ts          # Configuration
│   ├── types.ts           # Type definitions
│   ├── chat.ts            # Chat API
│   ├── projects.ts        # Projects API
│   ├── files.ts           # Files API
│   ├── agents.ts          # Agents API
│   ├── streaming.ts       # Streaming utilities
│   └── hooks/             # React Query hooks
├── app/                    # Expo Router screens
├── components/            # React components
│   ├── examples/         # API example components
│   └── ...
├── hooks/                 # Custom hooks
├── lib/                   # Utilities (non-API)
├── contexts/              # React contexts
└── assets/                # Static assets
```

## 🎯 Key Features

### ✅ Centralized API Layer
- All API code in `api/` directory
- Type-safe with full TypeScript support
- React Query for data fetching & caching
- Automatic authentication via Supabase
- Comprehensive error handling

### ✅ Modern Stack
- **React Native** with Expo SDK 54
- **NativeWind** (Tailwind CSS for RN)
- **TypeScript** (strict mode)
- **React Query** for state management
- **Supabase** for auth & database
- **Expo Router** for navigation

### ✅ Design System
- Custom Roobert font family
- Theme-aware components
- Consistent styling with design tokens
- Dark/light mode support

## 📖 Documentation

### Getting Started
- **[Quick Start Guide](./QUICK_START.md)** - Get up and running in 5 minutes
- **[Environment Setup](./ENV_SETUP.md)** - Configure environment variables
- **[API Structure](./API_STRUCTURE.md)** - Understanding the API layer

### API Documentation
- **[API Documentation](./api/README.md)** - Complete API reference
- **[Migration Guide](./api/MIGRATION_GUIDE.md)** - Migrate from old structure
- **[Implementation Summary](./API_IMPLEMENTATION_SUMMARY.md)** - What was built

## 🔧 Configuration

### Environment Variables

Create a `.env` file:

```bash
# Backend API
EXPO_PUBLIC_BACKEND_URL=http://localhost:8000/api

# Supabase
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

See [ENV_SETUP.md](./ENV_SETUP.md) for detailed configuration.

## 🧪 Testing

### API Demo
Access the API demo in the app:
1. Sign in
2. Open Settings (tap profile)
3. Tap "API Demo" (dev mode only)

### Manual Testing
```typescript
import { useProjects } from '@/api/hooks';

function TestComponent() {
  const { data, isLoading } = useProjects();
  // Test your API integration
}
```

## 📚 Usage Examples

### Fetch Data
```typescript
import { useThreads, useProjects } from '@/api/hooks';

function MyComponent() {
  const { data: threads } = useThreads();
  const { data: projects } = useProjects();
  
  return <View>...</View>;
}
```

### Send Data (Mutations)
```typescript
import { useSendMessage } from '@/api/hooks';

function ChatInput() {
  const sendMessage = useSendMessage({
    onSuccess: () => console.log('Sent!'),
  });
  
  return (
    <Button onPress={() => {
      sendMessage.mutate({
        threadId: 'thread-123',
        message: 'Hello!',
      });
    }}>
      Send
    </Button>
  );
}
```

### Error Handling
```typescript
import { getUserFriendlyError } from '@/api/error-handler';

const { error } = useThreads();

if (error) {
  const friendly = getUserFriendlyError(error);
  Alert.alert(friendly.title, friendly.message);
}
```

## 🛠️ Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run ios          # Run on iOS
npm run android      # Run on Android
npm run web          # Run on web
npm run clean        # Clean cache
```

### Code Quality
- TypeScript strict mode enabled
- ESLint configuration included
- Prettier for code formatting

## 🎨 Design System

### Colors
All colors use semantic tokens from `global.css`:
- `bg-background`, `bg-card`, `bg-primary`, etc.
- `text-foreground`, `text-muted`, etc.
- Theme-aware (light/dark mode)

### Typography
- **Font**: Roobert (custom)
- **Sizes**: Consistent scale
- **Weights**: Regular, Medium, Semibold, Bold

### Components
- Reusable UI components in `components/ui/`
- Consistent styling with NativeWind
- Accessible and performant

## 🚦 Status

✅ **Production Ready**
- All API endpoints implemented
- Comprehensive error handling
- Full TypeScript coverage
- Working examples
- Complete documentation

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript strict mode
3. Follow the design system
4. Add tests for new features
5. Update documentation

## 📦 Dependencies

### Core
- `expo` - React Native framework
- `react` / `react-native` - UI framework
- `@tanstack/react-query` - Data fetching
- `@supabase/supabase-js` - Backend & auth

### Styling
- `nativewind` - Tailwind CSS for RN
- `tailwindcss` - CSS framework
- `@rn-primitives/*` - UI primitives

### Navigation
- `expo-router` - File-based routing
- `@react-navigation/native` - Navigation

### Other
- `expo-image-picker` - Image selection
- `expo-document-picker` - File selection
- `expo-haptics` - Haptic feedback
- `react-native-reanimated` - Animations

## 📄 License

[Your License Here]

## 🆘 Support

- Check documentation in `./api/README.md`
- Review examples in `./components/examples/`
- Use the API Demo in-app
- Check console logs for debugging

---

**Ready to build!** 🚀

For detailed API usage, see [api/README.md](./api/README.md)
