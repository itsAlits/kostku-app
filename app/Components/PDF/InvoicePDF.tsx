import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

interface InvoicePDFProps {
  invoiceData: {
    date: string;
    tenantName: string;
    total: string;
    paymentDate: string;
    status: string;
    details?: {
      listrik?: string;
      air?: string;
      sampah?: string;
      poskamling?: string;
      kamar?: string;
    };
  };
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 30,
  },
  header: {
    fontSize: 14,
    marginBottom: 4,
    textAlign: "center",
    fontWeight: "bold",
    color: "#1f2937",
  },
  subtitle: {
    fontSize: 10,
    marginBottom: 30,
    textAlign: "center",
    color: "#6b7280",
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderColor: "#374151",
    marginBottom: 20,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableColHeader: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "#374151",
    backgroundColor: "#f3f4f6",
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "#374151",
  },
  tableCellHeader: {
    margin: "auto",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 10,
    fontWeight: "bold",
    color: "#1f2937",
  },
  tableCell: {
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 8,
    fontSize: 10,
    color: "#374151",
  },
  totalRow: {
    margin: "auto",
    flexDirection: "row",
    backgroundColor: "#1f2937",
  },
  totalColLabel: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "#374151",
    backgroundColor: "#1f2937",
  },
  totalColValue: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: "#374151",
    backgroundColor: "#1f2937",
  },
  totalCellLabel: {
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  totalCellValue: {
    margin: "auto",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 10,
    fontWeight: "bold",
    color: "#ffffff",
  },
  statusPaid: {
    margin: "auto",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 10,
    fontWeight: "bold",
    color: "#059669",
  },
  statusUnpaid: {
    margin: "auto",
    marginTop: 8,
    marginBottom: 8,
    fontSize: 10,
    fontWeight: "bold",
    color: "#dc2626",
  },
  footer: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 10,
    color: "#6b7280",
  },
});

export const InvoicePDF: React.FC<InvoicePDFProps> = ({ invoiceData }) => {
  const formatCurrency = (amount: string | number) => {
    const num = typeof amount === "string" ? parseFloat(amount) : amount;
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>INVOICE AWD KOST</Text>
        <Text style={styles.subtitle}>Kamar No 1</Text>

        {/* Table */}
        <View style={styles.table}>
          {/* Header Row */}
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Keterangan</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Detail</Text>
            </View>
          </View>

          {/* Data Rows */}
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Tanggal Invoice</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{invoiceData.date}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Nama Penyewa</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{invoiceData.tenantName}</Text>
            </View>
          </View>

          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Status Pembayaran</Text>
            </View>
            <View style={styles.tableCol}>
              <Text
                style={
                  invoiceData.status === "Lunas"
                    ? styles.statusPaid
                    : styles.statusUnpaid
                }
              >
                {invoiceData.status}
              </Text>
            </View>
          </View>
        </View>

        {/* Breakdown Table */}
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Item Tagihan</Text>
            </View>
            <View style={styles.tableColHeader}>
              <Text style={styles.tableCellHeader}>Jumlah</Text>
            </View>
          </View>

          {invoiceData.details?.kamar && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Sewa Kamar</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(invoiceData.details.kamar)}
                </Text>
              </View>
            </View>
          )}

          {invoiceData.details?.listrik && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Listrik</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(invoiceData.details.listrik)}
                </Text>
              </View>
            </View>
          )}

          {invoiceData.details?.air && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Air</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(invoiceData.details.air)}
                </Text>
              </View>
            </View>
          )}

          {invoiceData.details?.sampah && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Sampah</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(invoiceData.details.sampah)}
                </Text>
              </View>
            </View>
          )}

          {invoiceData.details?.poskamling && (
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Poskamling</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {formatCurrency(invoiceData.details.poskamling)}
                </Text>
              </View>
            </View>
          )}

          {/* Total Row */}
          <View style={styles.totalRow}>
            <View style={styles.totalColLabel}>
              <Text style={styles.totalCellLabel}>Total Pembayaran</Text>
            </View>
            <View style={styles.totalColValue}>
              <Text style={styles.totalCellValue}>
                {formatCurrency(invoiceData.total)}
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.footer}>
          Terima kasih atas pembayaran Anda - AWD Kost Management
        </Text>
      </Page>
    </Document>
  );
};

export default InvoicePDF;
