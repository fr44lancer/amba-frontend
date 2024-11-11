import { cn } from '@/lib/utils';
import { Col, Image, Row } from 'antd';

export const HoverImagesEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
  }[];
  className?: string;
}) => {
  return (
    <Row className={cn('py-4', className)} gutter={[16, 24]}>
      {/* Image.PreviewGroup enables the Prev-Next navigation in preview mode */}
      <Image.PreviewGroup>
        {items.map((item, idx) => (
          <Col key={`item-${idx}`}>
            <Image
              src={item.image}
              width={300}
              height={300}
              draggable={false}
              className="h-full w-full rounded-3xl object-cover object-center"
            />
          </Col>
        ))}
      </Image.PreviewGroup>
    </Row>
  );
};
