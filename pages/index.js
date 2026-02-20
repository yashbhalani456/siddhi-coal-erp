import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({});

    useEffect(() => {
        (async () => {
              const { data } = await supabase.rpc("get_dashboard_summary");
                    setStats(data);
                        })();
                          }, []);

                            return (
                                <Layout>
                                      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                                            <div className="grid grid-cols-3 gap-4">
                                                    <div className="card">Total Load: {stats.total_load}</div>
                                                            <div className="card">Total Net: {stats.total_net}</div>
                                                                    <div className="card">Shortage %: {stats.shortage_percent}%</div>
                                                                          </div>
                                                                              </Layout>
                                                                                );
                                                                                }
      <div className="grid grid-cols-3 gap-4