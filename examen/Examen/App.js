import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, Button } from 'react-native';

// Nombre del portal de noticias
const portalName = 'Noticias Hoy';

// Datos de categorías y artículos
const categories = [
  {
    name: 'Deportes',
    articles: [
      {
        title: 'Final de la Liga MX',
        date: '2025-12-06',
        summary: 'El partido final de la Liga MX se disputó con gran intensidad y emoción, dejando a los aficionados al borde de sus asientos.',
        content: 'Detalles completos del partido, estadísticas y entrevistas exclusivas.'
      },
      {
        title: 'México gana oro en Panamericanos',
        date: '2025-12-05',
        summary: 'La delegación mexicana logra una histórica medalla de oro en los Juegos Panamericanos, destacando el esfuerzo de los atletas nacionales.',
        content: 'Entrevistas con los ganadores y análisis del desempeño nacional.'
      }
    ]
  },
  {
    name: 'Nacional',
    articles: [
      {
        title: 'Reformas educativas aprobadas',
        date: '2025-12-04',
        summary: 'El Congreso aprueba nuevas reformas educativas que prometen mejorar la calidad de la enseñanza en todo el país.',
        content: 'Detalles sobre las reformas y opiniones de expertos.'
      },
      {
        title: 'Iniciativa ambiental en CDMX',
        date: '2025-12-03',
        summary: 'La Ciudad de México lanza una ambiciosa iniciativa para reducir la contaminación y promover energías limpias.',
        content: 'Plan de acción y participación ciudadana.'
      }
    ]
  },
  {
    name: 'Entretenimiento',
    articles: [
      {
        title: 'Estreno de película nacional',
        date: '2025-12-02',
        summary: 'Una nueva película mexicana llega a los cines, prometiendo emociones y una historia cautivadora.',
        content: 'Reseña, entrevistas con el elenco y detrás de cámaras.'
      },
      {
        title: 'Festival de música en Monterrey',
        date: '2025-12-01',
        summary: 'El festival anual reúne a los mejores artistas nacionales e internacionales en una celebración única.',
        content: 'Cartelera, horarios y recomendaciones.'
      }
    ]
  },
  {
    name: 'Tecnologia',
    articles: [
      {
        title: 'Nuevo smartphone mexicano',
        date: '2025-11-30',
        summary: 'Una empresa mexicana lanza su nuevo smartphone con tecnología de punta y precios accesibles.',
        content: 'Características, precio y comparativas.'
      },
      {
        title: 'Innovación en IA',
        date: '2025-11-29',
        summary: 'Investigadores mexicanos presentan avances en inteligencia artificial aplicados a la salud.',
        content: 'Aplicaciones prácticas y futuro de la IA en México.'
      }
    ]
  }
];

// Componente: ArticleCard
// Muestra la información de un artículo individual y un botón para "Leer más"
function ArticleCard({ article }) {
  // Acción al presionar "Leer más"
  const handleReadMore = () => {
    Alert.alert(
      article.title,
      '',
      [
        { text: 'Compartir', onPress: () => {} },
        { text: 'Guardar', onPress: () => {} },
        { text: 'Cerrar', style: 'cancel' }
      ]
    );
  };

  return (
    <View style={styles.card}>
      {/* Imagen del artículo (opcional, descomentable si se agrega la propiedad image) */}
      {/* <Image source={article.image} style={styles.cardImage} /> */}
      <Text style={styles.cardTitle}>{article.title}</Text>
      <Text style={styles.cardDate}>{article.date}</Text>
      <Text style={styles.cardSummary}>{article.summary}</Text>
      <View style={styles.cardActions}>
        <Button title="Leer más" onPress={handleReadMore} />
      </View>
    </View>
  );
}

// Componente: Section
// Muestra una sección de la categoría con sus artículos
function Section({ category }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{category.name}</Text>
      <View style={styles.articlesRow}>
        {category.articles.map((article, idx) => (
          <ArticleCard key={idx} article={article} />
        ))}
      </View>
    </View>
  );
}

// Componente principal: App
// Estructura la pantalla principal del portal de noticias
export default function App() {
  return (
    <View style={styles.container}>
      {/* Encabezado del portal */}
      <View style={styles.header}>
        <Text style={styles.headerText}>{portalName}</Text>
      </View>
      {/* ScrollView para mostrar las secciones de noticias */}
      <ScrollView style={styles.scrollView}>
        {categories.slice(0, 3).map((category, idx) => (
          <Section key={idx} category={category} />
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos para los componentes visuales
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    height: 70,
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    position: 'relative',
    zIndex: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    marginTop: 0,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  articlesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#222',
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  cardSummary: {
    fontSize: 14,
    color: '#444',
    marginBottom: 8,
  },
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});