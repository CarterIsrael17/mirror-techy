// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// ✅ Your Supabase credentials
const supabaseUrl = "https://nwgsxrzskvuoabftuiga.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53Z3N4cnpza3Z1b2FiZnR1aWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3OTU3MDcsImV4cCI6MjA2OTM3MTcwN30.ADSTqvA_54vnNMzhUNaskRiG1UfDu-XrbGtez4Ij-Zs";

// ✅ Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
