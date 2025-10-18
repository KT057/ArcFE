import '@testing-library/jest-dom'
import { beforeAll, afterAll, afterEach } from 'vitest'
import { server } from './packages/tests/src/msw/server.ts'

// Node.jsの組み込みWeb APIをグローバルに設定
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util')
  global.TextEncoder = TextEncoder
  global.TextDecoder = TextDecoder
}

if (typeof global.ReadableStream === 'undefined') {
  const { ReadableStream, TransformStream } = require('stream/web')
  global.ReadableStream = ReadableStream
  global.TransformStream = TransformStream
}

if (typeof global.Blob === 'undefined') {
  const { Blob } = require('buffer')
  global.Blob = Blob
}

if (typeof global.File === 'undefined') {
  const { File } = require('buffer')
  global.File = File
}

// MSWサーバーをテスト開始前に起動
beforeAll(() => server.listen())

// 各テスト後にハンドラーをリセット
afterEach(() => server.resetHandlers())

// テスト終了後にサーバーを停止
afterAll(() => server.close())

// MutationObserverのポリフィル
global.MutationObserver = class MutationObserver {
  constructor(callback: any) {}
  disconnect() {}
  observe(element: any, initObject: any) {}
  takeRecords() { return [] }
}

// ResizeObserverのポリフィルも追加
global.ResizeObserver = class ResizeObserver {
  constructor(callback: any) {}
  disconnect() {}
  observe(element: any, options?: any) {}
  unobserve(element: any) {}
}