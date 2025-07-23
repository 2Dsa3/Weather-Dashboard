import { useState, useEffect } from "react";
import type { OpenMeteoResponse } from "../types/DashboardTypes";

export interface DataFetcherResult {
  data: OpenMeteoResponse | null;
  loading: boolean;
  error: string | null;
}

const CACHE_DURATION_MS = 10 * 60 * 1000; // 10 minutos

const DataFetcher = (lat: number, lon: number): DataFetcherResult => {
  const [data, setData] = useState<OpenMeteoResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=America%2FChicago`;

  const storageKey = `weather_${lat}_${lon}`;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const cached: string | null = localStorage.getItem(storageKey);
        if (cached) {
          const parsed = JSON.parse(cached);
          const age = Date.now() - parsed.timestamp;

          if (age < CACHE_DURATION_MS) {
            setData(parsed.data);
            setLoading(false);
            return; // ✅ Datos válidos en cache, no se hace fetch
          }
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos de la API");
        }
        const result: OpenMeteoResponse = await response.json();
        setData(result);

        localStorage.setItem(
          storageKey,
          JSON.stringify({
            data: result,
            timestamp: Date.now(),
          })
        );
      } catch (err: any) {
        if (cached) {
          const parsed = JSON.parse(cached);
          setData(parsed.data);
          setError("Error en la API, usando datos almacenados.");
        } else {
          setError(err.message || "Error desconocido");
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [lat, lon]);

  return { data, loading, error };
};

export default DataFetcher;
