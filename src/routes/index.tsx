import { Link, createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className=" container mx-auto content-center text-center min-h-screen">
      <div>
        <Link to="/applications/personal-information">
          <Button>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}
