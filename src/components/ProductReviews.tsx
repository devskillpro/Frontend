'use client';
import { useState } from 'react';
import { FaStar, FaTimes, FaImage } from 'react-icons/fa';

type Review = {
  name: string;
  date: string;
  rating: number;
  comment: string;
  images?: string[];
};

type ReviewSectionProps = {
  productId: string | number;
  initialReviews?: Review[];
};

const ReviewSection = ({ productId, initialReviews = [] }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageFiles(files);

    Promise.all(files.map(file => {
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    })).then(imgs => setImages(imgs));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comment) return;

    const newReview: Review = {
      name,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      rating,
      comment,
      images,
    };

    setReviews([newReview, ...reviews]);
    setShowModal(false);
    setName('');
    setRating(5);
    setComment('');
    setImages([]);
    setImageFiles([]);
  };

  return (
    <section className="py-12 px-4 md:px-10 max-w-6xl mx-auto border-t mt-14 bg-[#fefae9]">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#D4AF37]">
          ⭐ Customer Reviews ({reviews.length})
        </h2>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#D4AF37] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#b98c1d] transition flex items-center gap-2"
        >
          Write Review
        </button>
      </div>

      {/* Review Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Write a Review</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FaTimes className="text-2xl" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37]"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1,2,3,4,5].map(star => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className={`p-2 rounded-lg ${star <= rating ? 'bg-[#D4AF37] text-white' : 'bg-gray-100 text-gray-400'}`}
                      >
                        <FaStar className="text-lg" />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Review</label>
                  <textarea
                    placeholder="Share your experience..."
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] h-32"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Images (optional)
                  </label>
                  <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#D4AF37] transition">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center text-gray-500">
                      <FaImage className="text-2xl mb-2" />
                      <span className="text-sm">Click to upload images</span>
                    </div>
                  </label>
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt="Preview"
                        className="w-full h-24 object-cover rounded-lg border"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-[#D4AF37] text-white rounded-lg font-semibold hover:bg-[#b98c1d] transition"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Reviews List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-medium text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4">{review.comment}</p>
              {review.images && review.images.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {review.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt="Review"
                      className="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No reviews yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;
