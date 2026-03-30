// // app/api/chat/route.ts
// import { NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// // Nhớ import prisma client bạn đã setup trong dự án
// // Ví dụ file setup prisma thường nằm ở lib/prisma.ts hoặc prisma/index.ts
// import prisma from "@/lib/prisma"; 

// // 1. Setup Gemini
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const userMessage = body.message;

//     if (!userMessage) {
//       return NextResponse.json({ text: "Bạn chưa nhập tin nhắn." }, { status: 400 });
//     }

//     // 2. LẤY DỮ LIỆU TỪ DATABASE (Thực phẩm GreenPlus/FreshFood)
//     // Mình lấy 30 sản phẩm đầu tiên, chỉ lấy các field cần thiết để tiết kiệm token AI
//     const products = await prisma.product.findMany({
//       take: 30,
//       select: {
//         id: true,
//         name: true,      // Tên SP
//         price: true,     // Giá SP
//         imageUrl: true,  // Link ảnh SP (Giả định field này tồn tại trong DB của bạn)
//         category: true,   // Danh mục (để AI phân loại tốt hơn)
//       }
//     });

//     // 3. CHUYỂN DATA THÀNH DẠNG TEXT ĐỂ MỚM CHO AI ĐỌC
//     const productContext = products
//       .map((p) => `- ID: ${p.id} | Tên: ${p.name} | Giá: ${p.price?.toLocaleString('vi-VN')}đ | Danh mục: ${p.category} | Link_Ảnh: ${p.imageUrl || ''}`)
//       .join("\n");

//     // 4. XÂY DỰNG PROMPT (Câu lệnh)
//     // Hệ thống prompt này cực kỳ quan trọng để định hình tính cách AI và ép output
//     const systemPrompt = `Bạn là trợ lý ảo CSKH tên là "Freshy", làm việc cho siêu thị thực phẩm hữu cơ FreshFood. 
//     Bạn thân thiện, lễ phép và xưng hô "mình" - "bạn".

//     🔴 ĐÂY LÀ DANH SÁCH SẢN PHẨM HIỆN CÓ TRONG KHO (Sử dụng dữ liệu này để trả lời):
//     ${productContext}

//     🔴 QUY TẮC CẦN TUÂN THỦ NGHIÊM NGẶT:
//     1. Chỉ giới thiệu sản phẩm CÓ TRONG DANH SÁCH trên. Nếu khách hỏi món không có, hãy lịch sự báo là hiện tại chưa có hàng.
//     2. Khi giới thiệu một sản phẩm cụ thể (ví dụ khách hỏi giá, hoặc hỏi món nào ngon), bạn PHẢI điền đầy đủ thông tin vào các key JSON tương ứng.
//     3. Trả lời MỌI tin nhắn bằng MỘT chuỗi JSON hợp lệ, không bao gồm ký tự markdown \`\`\`json.

//     🔴 CẤU TRÚC JSON OUTPUT YÊU CẦU:
//     {
//       "text": "Câu trả lời giao tiếp bằng văn bản của bạn (ngắn gọn, dưới 2 câu)",
//       "hasProduct": true hoặc false (chỉ để true khi bạn đang giới thiệu hoặc nhắc đến 1 món cụ thể có ảnh trong danh sách),
//       "productName": "Tên chính xác của sản phẩm (nếu hasProduct là false, để rỗng)",
//       "productPrice": Giá tiền dạng số (ví dụ 50000, không ghi chữ đ, nếu không có để 0),
//       "productImage": "Link_Ảnh của sản phẩm từ danh sách (nếu không có để rỗng)"
//     }

//     Khách hàng vừa nói: "${userMessage}"`;

//     // 5. GỬI CHO GEMINI VÀ ÉP CHẾ ĐỘ JSON
//     const model = genAI.getGenerativeModel({ 
//       model: "gemini-1.5-flash", // Dùng bản flash cho rẻ và nhanh
//       generationConfig: { 
//         responseMimeType: "application/json", // Chế độ ép trả về JSON nguyên bản
//         temperature: 0.5, // Giảm độ sáng tạo để AI tập trung vào data SP
//       } 
//     });

//     const result = await model.generateContent(systemPrompt);
//     const aiRawReply = result.response.text();

//     // 6. PARSE JSON VÀ TRẢ VỀ FRONTEND
//     // Vì đã bật responseMimeType: "application/json" nên ko cần dùng regex xóa markdown nữa
//     let aiResponseJson;
//     try {
//         aiResponseJson = JSON.parse(aiRawReply);
//     } catch (parseError) {
//         console.error("❌ Lỗi Parse JSON AI:", aiRawReply);
//         aiResponseJson = { 
//             text: "Xin lỗi, mình gặp chút trục trặc khi xử lý thông tin.", 
//             hasProduct: false 
//         };
//     }

//     return NextResponse.json(aiResponseJson);

//   } catch (error) {
//     console.error("❌ LỖI API CHAT:", error);
//     return NextResponse.json(
//       { text: "Freshy đang bận một chút, bạn thử lại sau nhé! 😢", hasProduct: false },
//       { status: 500 }
//     );
//   }
// }