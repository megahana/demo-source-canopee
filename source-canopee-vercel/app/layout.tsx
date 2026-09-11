import type {Metadata} from 'next';import './globals.css';
import {Analytics} from '@vercel/analytics/next';export const metadata:Metadata={title:'Source & Canopée — Retraite bien-être',description:'Retraite bien-être. Forêt de Fontainebleau.'};export default function Layout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}<Analytics /></body></html>}
