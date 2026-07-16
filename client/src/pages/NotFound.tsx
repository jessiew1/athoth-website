/** Scientific editorial error state: quiet, direct, and easy to escape. */
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return <main className="not-found"><div><span>404 / ROUTE NOT FOUND</span><h1>This path does not contain an Athoth resource.</h1><p>Return to the home page or use the navigation to continue exploring our research and capabilities.</p><Link className="button button-primary" href="/"><ArrowLeft size={17}/> Return home</Link></div></main>;
}
