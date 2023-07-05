import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    NextResponse.json({
      message: "ok",
    });
  } catch (error: any) {
    NextResponse.json({
      message: "failed",
    });
  }
};
