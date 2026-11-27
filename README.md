# Vortex Pups – Two Friends

Game co-op online cho hai người: hai chú chó ngồi chung một chiếc thúng tròn, mỗi người một mái chèo, phải phối hợp chèo, xoay và trượt ngang để vượt chướng ngại vật.

Two friends. One basket. Zero sense of direction.

## Tài liệu

Game Design Document nằm trong `docs/gdd/`, bắt đầu đọc từ `docs/gdd/README.md`. Ghi chú playtest để trong `docs/playtest/`.

## Cách chạy

Yêu cầu: Node 22, xem `.nvmrc`, và pnpm.

```bash
pnpm install
pnpm dev
```

- Client: http://localhost:5173
- Server Colyseus: ws://localhost:2567

## Lệnh thường dùng

| Lệnh                | Tác dụng                          |
| ------------------- | --------------------------------- |
| `pnpm dev`          | Chạy client và server cùng lúc    |
| `pnpm build`        | Build toàn bộ workspace           |
| `pnpm typecheck`    | Kiểm tra kiểu TypeScript          |
| `pnpm format`       | Format code bằng Prettier         |
| `pnpm format:check` | Kiểm tra format, CI chạy lệnh này |

## Cấu trúc thư mục

- `apps/client` – Vite, React, Three.js qua react-three-fiber: hiển thị game và nhận input.
- `apps/server` – Colyseus server chạy vật lý Rapier, nguồn sự thật của state.
- `packages/shared` – Code dùng chung: thông số `TUNING`, kiểu message mạng, sau này là logic vật lý thúng.
