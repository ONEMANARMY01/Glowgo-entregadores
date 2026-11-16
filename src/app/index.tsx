
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [online, setOnline] = useState(false);
  const [tab, setTab] = useState('Início');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#111111" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>
              Glow<Text style={styles.pink}>Go</Text>
            </Text>
            <Text style={styles.subtitle}>ENTREGADORES</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>GG</Text>
          </View>
        </View>

        <View style={styles.welcome}>
          <Text style={styles.greeting}>Olá, entregador!</Text>
          <Text style={styles.description}>
            Pronto para começar suas entregas?
          </Text>
        </View>

        <View style={styles.statusCard}>
          <View>
            <Text style={styles.statusTitle}>
              {online ? 'Você está online' : 'Você está offline'}
            </Text>
            <Text style={styles.statusDescription}>
              {online
                ? 'Aguardando novas entregas'
                : 'Ative para receber entregas'}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.onlineButton,
              online && styles.offlineButton,
            ]}
            onPress={() => setOnline(!online)}
          >
            <Text style={styles.onlineButtonText}>
              {online ? 'FICAR OFFLINE' : 'FICAR ONLINE'}
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Resumo de hoje</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Entregas</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>R$ 0,00</Text>
            <Text style={styles.statLabel}>Ganhos</Text>
          </View>
        </View>

        <View style={styles.deliveryCard}>
          <Text style={styles.deliveryTitle}>
            Entregas disponíveis
          </Text>

          <View style={styles.emptyIcon}>
            <Text style={styles.emptyEmoji}>🛵</Text>
          </View>

          <Text style={styles.emptyTitle}>
            Nenhuma entrega por enquanto
          </Text>

          <Text style={styles.emptyDescription}>
            Quando houver pedidos disponíveis na sua região,
            eles aparecerão aqui.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Dica GlowGo</Text>
          <Text style={styles.infoText}>
            Mantenha seu status online para ficar disponível
            para receber novas ofertas de entrega.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        {['Início', 'Entregas', 'Ganhos', 'Perfil'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.tab}
            onPress={() => setTab(item)}
          >
            <Text
              style={[
                styles.tabText,
                tab === item && styles.activeTab,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  header: {
    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 30,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  pink: {
    color: '#FF4FA3',
  },
  subtitle: {
    color: '#FF4FA3',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 3,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#292929',
    borderWidth: 1,
    borderColor: '#FF4FA3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  welcome: {
    paddingHorizontal: 22,
    marginBottom: 25,
  },
  greeting: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    color: '#999999',
    marginTop: 7,
    fontSize: 14,
  },
  statusCard: {
    marginHorizontal: 20,
    padding: 18,
    backgroundColor: '#242424',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#383838',
    gap: 18,
  },
  statusTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusDescription: {
    color: '#AAAAAA',
    marginTop: 5,
  },
  onlineButton: {
    backgroundColor: '#FF4FA3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  offlineButton: {
    backgroundColor: '#444444',
  },
  onlineButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: 'bold',
    marginHorizontal: 22,
    marginTop: 28,
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#242424',
    borderRadius: 14,
    padding: 18,
  },
  statNumber: {
    color: '#FF4FA3',
    fontSize: 22,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#AAAAAA',
    marginTop: 8,
  },
  deliveryCard: {
    backgroundColor: '#242424',
    marginHorizontal: 20,
    marginTop: 25,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  deliveryTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'flex-start',
  },
  emptyIcon: {
    width: 75,
    height: 75,
    borderRadius: 40,
    backgroundColor: '#333333',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  emptyEmoji: {
    fontSize: 35,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 18,
  },
  emptyDescription: {
    color: '#999999',
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 9,
  },
  infoCard: {
    margin: 20,
    padding: 18,
    backgroundColor: '#382333',
    borderRadius: 14,
    borderLeftWidth: 3,
    borderLeftColor: '#FF4FA3',
  },
  infoTitle: {
    color: '#FF4FA3',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    color: '#DDDDDD',
    marginTop: 8,
    lineHeight: 21,
  },
  bottomBar: {
    flexDirection: 'row',
    backgroundColor: '#1D1D1D',
    borderTopWidth: 1,
    borderTopColor: '#333333',
    paddingVertical: 17,
    paddingBottom: 20,
    justifyContent: 'space-around',
  },
  tab: {
    alignItems: 'center',
  },
  tabText: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '600',
  },
  activeTab: {
    color: '#FF4FA3',
  },
});
