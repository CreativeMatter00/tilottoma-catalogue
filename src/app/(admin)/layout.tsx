import { DashboardSidebar } from "@/components/ui/sidebar/DashboardSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>    
      <DashboardSidebar>
        {children}
      </DashboardSidebar>
    </div>
  );
}
