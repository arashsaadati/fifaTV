import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Video from 'react-native-video';

const App = () => {
  const [streamUrl, setStreamUrl] = useState('https://portal.irsafam.ir/stream');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handlePlay = () => {
    if (!streamUrl.trim()) {
      setError('لطفاً URL استریم را وارد کنید');
      return;
    }
    setError('');
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleReadyForDisplay = () => {
    setIsLoading(false);
  };

  const handleError = (error: any) => {
    setError(`خطا: ${error.error?.errorString || 'خطای نامشخص'}`);
    setIsLoading(false);
  };

  if (isPlaying) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.videoContainer}>
          <Video
            source={{ uri: streamUrl }}
            style={styles.video}
            controls={true}
            resizeMode="contain"
            onLoadStart={handleLoadStart}
            onReadyForDisplay={handleReadyForDisplay}
            onError={handleError}
            progressUpdateInterval={1000}
            poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          />
          {isLoading && (
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#fff" />
              <Text style={styles.loadingText}>در حال بارگیری...</Text>
            </View>
          )}
        </View>
        <TouchableOpacity
          style={styles.stopButton}
          onPress={handleStop}
        >
          <Text style={styles.buttonText}>توقف</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>FifaTV</Text>
        <Text style={styles.subtitle}>پخش استریم HLS</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>URL استریم M3U8:</Text>
          <TextInput
            style={styles.input}
            placeholder="https://example.com/stream.m3u8"
            placeholderTextColor="#999"
            value={streamUrl}
            onChangeText={setStreamUrl}
            editable={!isLoading}
          />
        </View>

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}

        <TouchableOpacity
          style={[styles.playButton, isLoading && styles.buttonDisabled]}
          onPress={handlePlay}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>پخش</Text>
          )}
        </TouchableOpacity>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>راهنمایی:</Text>
          <Text style={styles.infoText}>• URL استریم M3U8 را وارد کنید</Text>
          <Text style={styles.infoText}>• بر روی دکمه "پخش" کلیک کنید</Text>
          <Text style={styles.infoText}>• از کنترل‌های ویدیو استفاده کنید</Text>
          <Text style={styles.infoText}>• برای توقف، دکمه "توقف" را کلیک کنید</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#2a2a2a',
    color: '#fff',
    padding: 15,
    borderRadius: 8,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#444',
  },
  playButton: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  stopButton: {
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    margin: 20,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  errorContainer: {
    backgroundColor: '#ff4444',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  errorText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  info: {
    backgroundColor: '#2a2a2a',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  infoText: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 5,
  },
  videoContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  video: {
    flex: 1,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  loadingText: {
    marginTop: 15,
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
