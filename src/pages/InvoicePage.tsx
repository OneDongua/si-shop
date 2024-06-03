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
          <div>
            可以点击
            <button
              className="mx-1 text-blue-500 hover:underline"
              onClick={() => navigate(`/purchase/${inv.id}`)}
            >
              https://si-hzyz.club/purchase/{inv.id}
            </button>{" "}
            继续完成或取消订单。若订单已上传成功，请尽量不要重复上传。
          </div>
        </div>
      ))}
    </div>
  );
}
