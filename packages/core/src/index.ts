// ============================================================================
// 基础层 - 类型系统、配置、日志、错误处理等底层基础设施
// ============================================================================
// 配置管理：多环境配置加载、合并、校验，支持文件/环境变量/远程配置源
export * from './config/index.js';
// 依赖注入：IoC 容器、服务注册与解析、生命周期管理、作用域隔离
export * from './di/index.js';
// 数据传输对象：各层之间传递数据的结构体，负责序列化边界的数据映射
export * from './dto/index.js';
// 加密：对称/非对称加密、哈希、签名验签、传输层加密、密钥派生
export * from './encryption/index.js';
// 环境变量：环境检测、变量读取与类型转换、.env 文件解析、必填变量校验
export * from './env/index.js';
// 错误体系：统一错误码、自定义异常类、错误链追踪、可重试错误标记
export * from './errors/index.js';
// 国际化：多语言资源加载、语言切换、消息模板插值、区域格式化
export * from './i18n/index.js';
// 日志系统：分级日志输出、结构化日志、日志轮转、多 transport 支持
export * from './logger/index.js';
// 密钥管理：API Key/Token 的安全存储、轮换策略、Vault 集成、内存保护
export * from './secrets/index.js';
// 序列化：JSON/MessagePack/Protobuf 等格式的编解码、自定义序列化器注册
export * from './serialization/index.js';
// 全局类型定义：请求/响应/消息/模型/Provider 等核心接口与类型别名
export * from './types/index.js';
// 工具函数：通用辅助方法，包括深拷贝、防抖、重试、ID 生成、时间格式化等
export * from './utils/index.js';
// 数据校验：基于 Schema 的输入校验、自定义校验规则、校验错误聚合
export * from './validation/index.js';

// ============================================================================
// Provider 层 - 统一多模型 Provider 的接入、路由、降级与计费
// ============================================================================
// 可用性检测：Provider 健康探针、熔断器、故障自动摘除与恢复、SLA 监控
export * from './availability/index.js';
// 批量处理：批量请求编排、并发控制、部分失败处理、结果聚合、进度回调
export * from './batch/index.js';
// 格式转换：不同 Provider 请求/响应格式的双向转换、消息角色映射、参数归一化
export * from './converter/index.js';
// 成本计算：按 Token/请求/时间的计费模型、多币种、预算预警、用量报表
export * from './cost/index.js';
// 模型集成：MoA 多模型提议与聚合、共识投票、级联升级、辩论协商
export * from './ensemble/index.js';
// 降级策略：主备切换、多级 fallback 链、降级日志、手动/自动降级触发
export * from './fallback/index.js';
// 函数调用：Tool Use / Function Calling 协议适配、参数解析、结果回注、并行调用
export * from './function-call/index.js';
// 本地推理：llama.cpp/Ollama/MLX/WebLLM/vLLM 统一接口、混合云端本地推理
export * from './local-inference/index.js';
// 模型管理：模型元数据注册、能力矩阵、上下文窗口、定价信息、版本映射
export * from './models/index.js';
// 多模态支持：图片/音频/视频/文件的上传、编码、嵌入消息、MIME 类型处理
export * from './multimodal/index.js';
// Provider 管理：Provider 注册/发现/初始化，统一适配器接口，生命周期管理
export * from './providers/index.js';
// 请求中继：请求转发、代理、负载均衡、请求头注入、超时与重试控制
export * from './relay/index.js';
// 路由策略：基于延迟/成本/能力的智能路由，加权轮询、一致性哈希、地理就近
export * from './routing/index.js';
// Token 管理：Token 计数、上下文窗口裁剪、分词器适配、用量统计
export * from './token/index.js';

// ============================================================================
// Agent 层 - Agent 定义、编排、状态管理与安全控制
// ============================================================================
// Agent 核心：单个 Agent 的定义、指令解析、工具绑定、执行循环
export * from './agent/index.js';
// Agent 管理：多 Agent 注册、发现、协作编排、消息路由、角色分配
export * from './agents/index.js';
// 审批流程：敏感操作人工审批、审批队列、超时处理、审批策略配置
export * from './approval/index.js';
// 链式调用：多步骤 Agent 串联、中间结果传递、条件分支、错误传播
export * from './chain/index.js';
// 上下文压缩：长对话摘要、Token 超限时的智能裁剪、渐进式压缩策略
export * from './compression/index.js';
// 上下文管理：对话上下文构建、变量注入、上下文窗口管理、系统提示词组装
export * from './context/index.js';
// 反馈系统：用户反馈收集、评分、标注、反馈驱动的 Prompt 优化
export * from './feedback/index.js';
// 安全护栏：输入/输出内容过滤、敏感词检测、注入防护、输出格式约束
export * from './guardrails/index.js';
// 循环检测：Agent 执行死循环检测、最大迭代限制、重复输出识别、自动中断
export * from './loop-detection/index.js';
// 记忆系统：短期/长期/情景/语义/程序性记忆存储、检索、摘要压缩、衰减策略
export * from './memory/index.js';
// 多智能体：多 Agent 协作模式（顺序/层级/蜂群/辩论/选择器/委派）
export * from './multi-agent/index.js';
// 人设系统：角色卡 V2/V3、性格引擎、情感追踪、多人设群聊
export * from './persona/index.js';
// 任务规划：任务分解、依赖图构建、动态重规划、Plan-and-Execute
export * from './planning/index.js';
// 提示词管理：Prompt 模板定义、变量插值、Few-shot 示例管理、Prompt 组合
export * from './prompts/index.js';
// 提示词版本：Prompt 版本控制、A/B 分流、灰度发布、回滚、变更历史
export * from './prompt-version/index.js';
// 推理增强：ReAct/LATS/ToT/GoT/Reflexion/Self-Discover 推理循环与可视化
export * from './reasoning/index.js';
// 调度器：Agent 任务调度、优先级队列、并发限制、超时控制、任务依赖
export * from './scheduler/index.js';
// 快照管理：Agent 执行状态快照、断点恢复、执行历史回溯、状态对比
export * from './snapshot/index.js';
// 状态管理：Agent 运行状态机、状态持久化、状态恢复、状态变更事件
export * from './state/index.js';

// ============================================================================
// Workflow 层 - 工作流引擎、条件分支、并行执行与模板
// ============================================================================
// 条件判断：工作流分支条件、规则引擎、布尔表达式求值、动态路由
export * from './conditions/index.js';
// 表达式引擎：动态表达式解析与求值、变量引用、函数调用、安全沙箱执行
export * from './expressions/index.js';
// 并行执行：工作流节点并行调度、Fork/Join、并发度控制、部分完成策略
export * from './parallel/index.js';
// 模板系统：工作流模板定义、参数化模板、模板继承、模板市场
export * from './templates/index.js';
// 数据转换：工作流节点间数据映射、JSONPath/JMESPath 转换、Schema 适配
export * from './transform/index.js';
// 工作流引擎：DAG 工作流定义、节点编排、执行引擎、状态流转、可视化描述
export * from './workflow/index.js';

// ============================================================================
// 工具层 - 外部工具集成、MCP 协议、沙箱执行
// ============================================================================
// A2A 协议：Agent-to-Agent 跨平台智能体发现、协商、任务委派
export * from './a2a/index.js';
// 计算机操控：截图-动作循环、浏览器自动化、无障碍树提取
export * from './computer-use/index.js';
// 连接器：第三方服务连接适配（数据库、API、SaaS），连接池、认证代理
export * from './connector/index.js';
// MCP 协议：Model Context Protocol 客户端/服务端实现、工具发现、资源访问
export * from './mcp/index.js';
// 插件系统：插件加载、生命周期钩子、插件间通信、插件隔离、热插拔
export * from './plugins/index.js';
// 沙箱执行：不可信代码隔离执行、资源限制、超时控制、文件系统隔离
export * from './sandbox/index.js';
// 技能管理：预置技能包、技能组合、技能参数配置、技能版本管理
export * from './skills/index.js';
// 工具系统：工具注册、描述、参数 Schema、执行沙箱、结果格式化
export * from './tools/index.js';

// ============================================================================
// 知识层 - 知识库、向量检索、RAG 增强
// ============================================================================
// 向量嵌入：文本/图片向量化、Embedding 模型适配、批量嵌入、维度对齐
export * from './embeddings/index.js';
// 知识库：文档导入、分块、索引构建、知识图谱、多数据源聚合
export * from './knowledge/index.js';
// 文档加载器：PDF/DOCX/HTML/Markdown/代码等 30+ 格式解析
export * from './loaders/index.js';
// RAG 检索增强：检索-生成管线、上下文注入、引用溯源、相关性评分
export * from './rag/index.js';
// 搜索引擎：全文检索、向量相似度搜索、混合检索、重排序、过滤
export * from './search/index.js';
// 文本分割：递归/语义/代码感知/Token 分割策略
export * from './splitters/index.js';
// 向量存储：向量数据库抽象层（Pinecone/Qdrant/Milvus/Chroma/pgvector）
export * from './vector-store/index.js';

// ============================================================================
// 会话层 - 会话管理、多轮对话、回放与导出
// ============================================================================
// 会话管理：会话创建/恢复/归档、会话元数据、会话隔离、并发会话控制
export * from './conversation/index.js';
// 会话导出：会话记录导出为 Markdown/JSON/PDF、自定义导出模板、批量导出
export * from './export-chat/index.js';
// 会话回放：历史会话逐步回放、时间线可视化、执行轨迹还原
export * from './replay/index.js';
// 线程管理：会话内多线程分支、线程合并、父子线程关系、线程上下文继承
export * from './thread/index.js';

// ============================================================================
// AI 增强层 - 微调、评测、推理增强、语义缓存
// ============================================================================
// A/B 测试：多模型/多 Prompt 对比实验、流量分配、指标采集、统计显著性分析
export * from './ab-test/index.js';
// 对齐调优：RLHF/DPO 数据管理、偏好标注、对齐评估、安全对齐
export * from './alignment/index.js';
// 语义缓存：基于语义相似度的响应缓存、缓存命中策略、TTL、缓存失效
export * from './cache-semantic/index.js';
// 模型蒸馏：大模型到小模型的知识迁移、蒸馏数据生成、效果对齐验证
export * from './distillation/index.js';
// 微调管理：微调数据集准备、训练任务提交、模型版本管理、效果评估
export * from './fine-tune/index.js';
// 意图识别：用户输入意图分类、槽位提取、意图路由、多轮意图跟踪
export * from './intent/index.js';
// 模型模式：直接模型调用、参数调优、单次补全
export * from './model/index.js';
// 模型对比：多模型同时调用、响应对比、质量评分、延迟/成本对比面板
export * from './model-compare/index.js';
// 调试沙盒：交互式 Prompt 调试、参数调优、实时预览、历史对比
export * from './playground/index.js';
// 结构化输出：JSON Schema 约束输出、输出解析与校验、重试修复、类型安全
export * from './structured-output/index.js';

// ============================================================================
// 代码智能层 - 代码索引、编码智能体
// ============================================================================
// 编码智能体：Issue 自动解决、PR 创建、测试生成、代码审查
export * from './code-agent/index.js';
// 代码语义索引：AST 解析(tree-sitter)、嵌入索引、仓库结构地图
export * from './code-index/index.js';

// ============================================================================
// 搜索与数据层 - AI 搜索、数据管道、数据分析
// ============================================================================
// AI 搜索：语义搜索集成（Tavily/Exa/Perplexity/自托管）、来源引用
export * from './ai-search/index.js';
// 数据分析：自然语言查询、自动可视化、有状态 Notebook
export * from './data-analysis/index.js';
// 数据管道：多源连接器、ETL 转换、数据清洗、调度同步
export * from './data-pipeline/index.js';

// ============================================================================
// 安全层 - 认证、授权、审计、合规
// ============================================================================
// 审计日志：操作审计记录、不可篡改日志、审计查询、合规报告生成
export * from './audit/index.js';
// 认证系统：API Key/OAuth/JWT 认证、多因素认证、Token 刷新、会话管理
export * from './auth/index.js';
// 合规检查：GDPR/CCPA 等法规合规校验、数据驻留、数据删除、合规报告
export * from './compliance/index.js';
// 幂等控制：请求去重、幂等键管理、重复请求检测、结果缓存返回
export * from './idempotency/index.js';
// 数据脱敏：PII/敏感数据自动识别与遮蔽、脱敏规则配置、日志脱敏
export * from './masking/index.js';
// 策略引擎：基于规则的访问控制策略、策略组合、优先级、策略评估日志
export * from './policy/index.js';
// 角色权限：RBAC 角色定义、权限矩阵、资源级权限、动态权限计算
export * from './rbac/index.js';
// 安全检测：输入注入检测、有害内容过滤、PII 识别、安全评分
export * from './safety/index.js';

// ============================================================================
// 服务层 - 数据库、缓存、队列、流式传输等基础服务
// ============================================================================
// 缓存系统：多级缓存（内存/Redis）、缓存策略、缓存穿透/雪崩防护、TTL
export * from './cache/index.js';
// 定时任务：Cron 表达式调度、分布式锁、任务日志、错过执行补偿
export * from './cron/index.js';
// 数据库：多数据库适配（SQL/NoSQL）、连接池、迁移、查询构建器、事务
export * from './database/index.js';
// HTTP 客户端：统一 HTTP 请求封装、拦截器、重试、超时、代理、请求日志
export * from './http-client/index.js';
// 媒体处理：图片缩放/裁剪、音视频转码、格式转换、元数据提取
export * from './media/index.js';
// 通知系统：多渠道通知（邮件/短信/推送/Webhook）、模板、发送队列、送达追踪
export * from './notification/index.js';
// 支付系统：多支付渠道接入、订单管理、退款、账单、支付回调处理
export * from './payment/index.js';
// 消息队列：异步任务投递、消费者组、死信队列、延迟消息、消息确认
export * from './queue/index.js';
// 实时通信：实时语音对话（WebRTC/VAD/TTS/STT）、中断处理
export * from './realtime/index.js';
// 服务管理：服务注册/发现、健康检查、优雅启停、服务依赖编排
export * from './services/index.js';
// 会话存储：用户会话持久化、分布式会话、会话过期、会话数据加密
export * from './session/index.js';
// 对象存储：文件上传/下载、S3/OSS 适配、分片上传、CDN 集成、签名 URL
export * from './storage/index.js';
// 流式传输：SSE/WebSocket 流式响应、背压控制、断线重连、流式解析
export * from './streaming/index.js';
// 文件上传：分片上传、断点续传、文件类型校验、病毒扫描、上传进度
export * from './upload/index.js';
// Webhook：Webhook 注册、事件触发、签名验证、重试机制、投递日志
export * from './webhook/index.js';
// 工作进程：后台任务执行、Worker 池管理、任务分发、进度上报、失败重试
export * from './worker/index.js';

// ============================================================================
// 多租户层 - 租户隔离、配额管理、计费与组织架构
// ============================================================================
// 计费系统：订阅计划、用量计费、账单生成、支付集成、费用分摊
export * from './billing/index.js';
// 组织管理：组织创建/邀请/成员管理、组织级配置、跨组织协作
export * from './organization/index.js';
// 配额管理：资源配额分配、用量追踪、配额预警、超额策略、弹性扩容
export * from './quota/index.js';
// 限流控制：多维度限流（IP/用户/API Key）、令牌桶/滑动窗口、限流降级
export * from './rate-limit/index.js';
// 租户管理：租户注册/隔离/配置、数据隔离策略、租户级功能开关
export * from './tenant/index.js';
// 工作空间：项目/环境隔离、工作空间级配置、资源共享与权限继承
export * from './workspace/index.js';

// ============================================================================
// 协议层 - API 网关、事件总线、中间件与协议适配
// ============================================================================
// API 版本：API 版本管理、版本路由、废弃通知、向后兼容策略
export * from './api-version/index.js';
// 事件系统：领域事件发布/订阅、事件溯源、事件重放、事件总线
export * from './events/index.js';
// API 网关：请求路由、认证鉴权、限流熔断、请求/响应转换、API 文档
export * from './gateway/index.js';
// 钩子系统：生命周期钩子注册、前置/后置处理、钩子链执行、异步钩子
export * from './hooks/index.js';
// 消息总线：跨服务消息传递、主题订阅、消息过滤、消息持久化
export * from './message-bus/index.js';
// 中间件：请求处理管线、中间件注册/排序、上下文传递、错误中间件
export * from './middleware/index.js';
// 协议适配：HTTP/gRPC/GraphQL/WebSocket 多协议支持、协议转换、统一接口
export * from './protocols/index.js';

// ============================================================================
// 可观测层 - 监控、调试、评测与健康检查
// ============================================================================
// 数据分析：使用指标聚合、趋势分析、漏斗分析、自定义报表、数据导出
export * from './analytics/index.js';
// 调试工具：请求追踪、Prompt 调试、中间状态检查、执行日志回放
export * from './debug/index.js';
// 效果评测：自动化评测管线、评测数据集、多维指标（准确率/延迟/成本）、回归检测
export * from './evaluation/index.js';
// 健康检查：服务健康探针、依赖检查、就绪/存活探针、健康状态聚合
export * from './health/index.js';
// 运行监控：实时指标采集、异常告警、性能基线、SLA 监控、仪表盘
export * from './monitor/index.js';
// 遥测系统：OpenTelemetry 集成、分布式追踪、指标上报、日志关联
export * from './telemetry/index.js';
// 测试框架：单元/集成/E2E 测试工具、Mock Provider、快照测试、覆盖率
export * from './testing/index.js';

// ============================================================================
// 输出层 - 输出格式化与渲染
// ============================================================================
// 输出管理：多格式输出（Markdown/JSON/Table/Tree）、终端渲染、语法高亮、分页
export * from './output/index.js';

// ============================================================================
// 生命周期层 - 功能开关、数据迁移与生命周期管理
// ============================================================================
// 功能开关：Feature Flag 管理、灰度发布、用户分群、开关依赖、远程配置
export * from './feature-flags/index.js';
// 生命周期：应用启动/关闭编排、资源初始化/释放、优雅退出、信号处理
export * from './lifecycle/index.js';
// 数据迁移：Schema 迁移、数据版本管理、迁移脚本执行、回滚、迁移状态追踪
export * from './migration/index.js';

// ============================================================================
// 扩展层 - IDE 集成、市场与资源管理
// ============================================================================
// IDE 集成：VS Code/JetBrains 插件协议、LSP 支持、内联补全、代码操作
export * from './ide/index.js';
// 扩展市场：插件/模板/技能包的发布、搜索、安装、评分、版本管理
export * from './marketplace/index.js';
// 资源管理：静态资源加载、资源打包、CDN 分发、资源版本控制、懒加载
export * from './resources/index.js';
