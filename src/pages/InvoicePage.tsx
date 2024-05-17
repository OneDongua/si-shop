import { invoices } from "../inventory/invoice";
import { useNavigate } from "react-router-dom";
import InvoiceInfo from "../components/InvoiceInfo";

export default function InvoicePage() {
  const iv = invoices.invoices;
  const navigate = useNavigate();

  return (
    <div>
      {iv.length === 0 && (
        <div className="text-center p-3">还没有订单呢🤔。</div>
      )}
      {iv.map((inv, ind) => (
        <div className="p-3 m-3 border shadow rounded" key={ind}>
          <InvoiceInfo invoice={inv} />
          {!inv.payment && (
            <div>
              此订单未完成，阁下可经由
              <button
                className="mx-1 text-blue-500 hover:underline"
                onClick={() => navigate(`/purchase/${inv.id}`)}
              >
                https://si-hzyz.club/purchase/{inv.id}
              </button>{" "}
              继续完成。阁下亦可经由此取消订单。
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
