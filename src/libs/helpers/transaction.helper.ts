import { TransactionStatus } from "@/core/domain/transaction/transaction.enum";
import { Colors } from "react-native-ui-lib";
import i18n from "./globalization.helper";

export function getTransactionStatusColor(transactionStatus: number) {
  switch (transactionStatus) {
    case TransactionStatus.Successful:
      return Colors.green30;
    case TransactionStatus.Pending:
      return Colors.yellow30;
    case TransactionStatus.Canceled:
      return Colors.red30;
    default:
      return Colors.grey30;
  }
}

export function getTransactionStatusLabel(transactionStatus: number) {
  switch (transactionStatus) {
    case TransactionStatus.Successful:
      return i18n.t("successful_e");
    case TransactionStatus.Pending:
      return i18n.t("pending");
    case TransactionStatus.Canceled:
      return i18n.t("canceled_e");
    default:
      return i18n.t("pending");
  }
}
