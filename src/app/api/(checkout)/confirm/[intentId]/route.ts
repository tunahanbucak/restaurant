import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { intentId: string } }
) => {
  const { intentId } = await params;

  if (!intentId) {
    return NextResponse.json({ error: "Missing intentId" }, { status: 400 });
  }

  console.log("intentId:", intentId);

  try {
    const order = await prisma.order.findUnique({
      where: {
        intent_id: intentId,
      },
    });

    if (!order) {
      return NextResponse.json(
        { error: "Order not found for the given intentId" },
        { status: 404 }
      );
    }
    const updateData = { status: "Being prepared!" };
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: updateData,
    });

    return new NextResponse(
      JSON.stringify({ message: "Order has been updated" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Database update error:", JSON.stringify(error));
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
