import React from "react";

export default function CreatePostPage() {
  const [content, setContent] = React.useState("");
  const [imageFile, setImageFile] = React.useState<File | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [successMessage, setSuccessMessage] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!content.trim()) {
      setError("投稿内容を入力してください。");
      return;
    }

    setIsLoading(true);
    try {
      // ここにSupabase Storageへの画像アップロードロジックを追加
      // const imageUrl = imageFile ? await uploadImage(imageFile) : null;
      const imageUrl = imageFile ? "https://via.placeholder.com/150" : null; // モック

      // ここにAPIコールロジックを追加
      // const response = await fetch("/api/posts", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ content, imageUrl }),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.error || "投稿に失敗しました。");
      // }

      // const data = await response.json();
      setSuccessMessage("投稿が完了しました！");
      setContent("");
      setImageFile(null);
      // TODO: タイムラインへのリダイレクトなど
    } catch (err: any) {
      setError(err.message || "予期せぬエラーが発生しました。");
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-h2 font-bold text-foreground mb-6">新規投稿</h2>
      <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg shadow-md border border-border">
        <div className="mb-4">
          <label htmlFor="content" className="block text-foreground text-sm font-bold mb-2">
            投稿内容
          </label>
          <textarea
            id="content"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-foreground leading-tight focus:outline-none focus:shadow-outline bg-background border-border"
            rows={6}
            placeholder="あなたの挑戦や活動について書いてください..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            disabled={isLoading}
          ></textarea>
        </div>
        <div className="mb-6">
          <label htmlFor="image" className="block text-foreground text-sm font-bold mb-2">
            画像（オプション）
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            className="block w-full text-sm text-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
            onChange={handleImageChange}
            disabled={isLoading}
          />
          {imageFile && (
            <p className="text-muted-foreground text-sm mt-2">選択中のファイル: {imageFile.name}</p>
          )}
        </div>

        {error && (
          <p className="text-destructive text-sm italic mb-4">{error}</p>
        )}
        {successMessage && (
          <p className="text-secondary text-sm italic mb-4">{successMessage}</p>
        )}

        <button
          type="submit"
          className="bg-primary text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline hover:bg-opacity-90 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? "投稿中..." : "投稿する"}
        </button>
      </form>
    </div>
  );
}
